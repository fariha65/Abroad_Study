import { useState, useContext } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { Button, Input } from 'antd';
import BreadCrumps from "../components/BreadCrumps";
import 'react-toastify/dist/ReactToastify.css';
import { UserContext } from "../context/AppContext";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [, setState] = useContext(UserContext);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:8000/api/auth/login', {
                email,
                password,
            });

            // Save token and user in state
            setState({
                user: res.data.user,
                token: res.data.token,
            });

            if (res.data.token) {
                toast.success('Login successful!');
                
                // Save the token and user in localStorage (without JSON.stringify for token)
                window.localStorage.setItem('authToken', res.data.token);
                window.localStorage.setItem('authUser', JSON.stringify(res.data.user));  // User data is stored as JSON

                // Navigate to the home page or dashboard
                navigate("/StudentProfile");
            }
        } catch (err) {
            if (err.response) {
                toast.error(err.response.data || 'Login failed. Please try again.');
            } else {
                toast.error('Unable to connect to the server.');
            }
            console.log(err);
        }
    };

    return (
        <div className="container fluid">
            <ToastContainer />
            <BreadCrumps page="login" title="login" />

            <div className="row py-5 text-light bg-default-image">
                <div className="col text-center">
                    <h1>Login</h1>
                </div>
            </div>

            <div className="row py-5">
                <div className="col-md-6 offset-md-3">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group p-2">
                            <small><label className="text-muted">Email address</label></small>
                            <Input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                placeholder="Enter Email"
                            />
                        </div>
                        <div className="form-group p-2">
                            <small><label className="text-muted">Password</label></small>
                            <Input.Password
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter password"
                            />
                        </div>
                        <div className="form-group p-2">
                            <Button
                                type="primary"
                                htmlType="submit"
                                disabled={!email || !password}
                                className="btn btn-primary col-12"
                            >
                                Submit
                            </Button>
                        </div>
                    </form>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <p className="text-center">
                        Not yet registered?{" "}
                        <a href="/register">Register</a>
                    </p>
                </div>
            </div>


            <div className="row">
                <div className="col">
                    <p className="text-center">
                        Forgot your password?{" "}
                        <a className="text-danger"   href="/ForgotPassword">Forgot password</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
