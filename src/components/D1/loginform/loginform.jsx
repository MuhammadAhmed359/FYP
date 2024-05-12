import React from 'react';
import { useNavigate } from 'react-router-dom';
import './loginform.css';

const LoginForm = () => {
    const navigate = useNavigate();

    function handleClick() {
        navigate("/dashboard");
    }

    return (
                <div className="login-page">
                    <div id='circle-1'></div>
                    <div id='circle-2'></div>
                    <div className="form">
                        <div className="logo-container">
                            <h1>LOGO</h1>
                        </div>
                        <form className="login-form">
                            <input type="text" placeholder="Enter Your Email" required />
                            <input type="password" placeholder="Enter Your Password" required />
                            <button onClick={handleClick} type="button">Login</button>
                        </form>
                    </div>
                </div>
            );
};

            export default LoginForm;
