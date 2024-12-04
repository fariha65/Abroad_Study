import { useState } from "react";
import axios from "axios";
import BreadCrumps from "../components/BreadCrumps";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "antd/dist/reset.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secret, setSecret] = useState("");
  const [question, setQuestion] = useState("");
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); // Initialize the navigate function

  const validate = () => {
    const newErrors = {};
  
    // Name Validation
    if (!name) {
      newErrors.name = "Name is required";
    } else if (!/^[a-zA-Z\s]+$/.test(name)) {
      newErrors.name = "Name must only contain letters";
    }
  
    // Email Validation
    const emailPattern = /^[a-zA-Z][a-zA-Z0-9._%+-]{1,63}@[a-zA-Z0-9-]{2,}\.[a-zA-Z]{2,}$/;
    const tempDomains = [
      "example.com", "tempmail.com", "mailinator.com", "yopmail.com",
      "trashmail.com", "fakeemail.com"
      // Add more known temporary or disposable domains as needed
    ];
  
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!emailPattern.test(email)) {
      newErrors.email = "Invalid email format";
    } else {
      const emailDomain = email.split("@")[1];
      if (tempDomains.includes(emailDomain)) {
        newErrors.email = "Temporary or disposable email domains are not allowed";
      }
    }
  
    // Password Validation
    if (!password) {
      newErrors.password = "Password is required";
    } else if (
      password.length < 6 || 
      password.length > 64 || 
      !/[A-Z]/.test(password) || 
      !/[0-9]/.test(password)
    ) {
      newErrors.password = "Password must be 6-64 characters and include uppercase letters and numbers";
    }
  
    // Secret Question Validation
    if (!question) {
      newErrors.question = "Please select a question";
    }
    if (!secret) {
      newErrors.secret = "Answer is required for the question";
    }
  
    return newErrors;
  };
  
  
  
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      axios
        .post("http://localhost:8000/api/auth/register", { name, email, password, secret })
        .then(() => {
          toast.success("Registration Successful!");
          navigate("/login"); // Redirect to login page after successful registration
        })
        .catch(() => toast.error("Registration Failed!"));
    }
  };

  return (
    <div className="container fluid">
      <BreadCrumps page="register" title="Register" />

      <div className="row py-5 text-light">
        <div className="col text-center">
          <h1>Register</h1>
        </div>
      </div>

      <div className="row py-5">
        <div className="col-md-6 offset-md-3">
          <form onSubmit={handleSubmit}>
            <div className="form-group p-2">
              <small><label className="text-muted">Your Name</label></small>
              <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="form-control" placeholder="Enter Name" />
              {errors.name && <p className="text-danger">{errors.name}</p>}
            </div>

            <div className="form-group p-2">
              <small><label className="text-muted">Email address</label></small>
              <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" placeholder="Enter Email" />
              {errors.email && <p className="text-danger">{errors.email}</p>}
            </div>

            <div className="form-group p-2">
              <small><label className="text-muted">Password</label></small>
              <div className="input-group">
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type={showPassword ? "text" : "password"}
                  className="form-control"
                  placeholder="Enter password"
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  style={{ cursor: "pointer", padding: "0 10px" }}
                >
                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </span>
              </div>
              {errors.password && <p className="text-danger">{errors.password}</p>}
            </div>

            <div className="form-group p-2">
              <small><label className="text-muted">Pick a Question</label></small>
              <select className="form-control" value={question} onChange={(e) => setQuestion(e.target.value)}>
                <option value="">Select a question</option>
                <option value="color">Favourite color?</option>
                <option value="student">Birth year?</option>
                <option value="others">Lucky number?</option>
              </select>
              {errors.question && <p className="text-danger">{errors.question}</p>}
              <small className="form-text text-muted">You can use this to reset your password if forgotten.</small>
            </div>

            <div className="form-group p-2">
              <input
                value={secret}
                onChange={(e) => setSecret(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Write your answer here"
              />
              {errors.secret && <p className="text-danger">{errors.secret}</p>}
            </div>

            <div className="form-group p-2">
              <button disabled={!name || !email || !password || !secret || !question} 
              className="btn btn-primary col-12">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <p className="text-center">Already registered? <Link to="/login">Login</Link></p>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Register;
