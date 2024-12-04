import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BreadCrumps from "../components/BreadCrumps";
const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [secret, setSecret] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple validation
    const errors = {};
    if (!email) errors.email = "Email is required";
    if (!secret) errors.secret = "Secret answer is required";
    if (!newPassword || newPassword.length < 6) {
      errors.newPassword = "Password must be at least 6 characters";
    }
    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      try {
        const response = await axios.post("http://localhost:8000/api/auth/forgotpassword", {
          email,
          secret,
          newPassword,
        });
        toast.success(response.data.message);
        setEmail("");
        setSecret("");
        setNewPassword("");
      } catch (err) {
        toast.error(err.response?.data || "Password reset failed");
      }
    }
  };

  return (
    <div className="container fluied">
       <BreadCrumps page="forgotpassword" title="forgotpassword" />
      <h1>Forgot Password</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className="text-danger">{errors.email}</p>}
        </div>
        <div className="form-group">
          <label>Secret Answer</label>
          <input
            type="text"
            className="form-control"
            value={secret}
            onChange={(e) => setSecret(e.target.value)}
          />
          {errors.secret && <p className="text-danger">{errors.secret}</p>}
        </div>
        <div className="form-group">
          <label>New Password</label>
          <input
            type="password"
            className="form-control"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          {errors.newPassword && <p className="text-danger">{errors.newPassword}</p>}
        </div>
        <button type="submit" className="btn btn-primary">Reset Password</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default ForgotPassword;
