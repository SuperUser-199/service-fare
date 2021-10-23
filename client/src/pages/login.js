import React from 'react'
import './Style.css'
import Header from "../components/header"
function Login() {
    return (
        <>
        <Header />
        <div className="reg-body"> 
        <div className="container">
        <div className="logo">
            <h3>Service Fare</h3>
        </div>
        <div className="row">
            <div className="login-form">
                <h2>Login</h2>
                <form autocomplete="off">
                    <input type="email" name="login-ml" id="login-ml" required placeholder="Enter your Email"/>
                    <input type="password" name="login-pd" id="login-pd" required placeholder="Enter your password"/>
                    
                    <div className="login-row">
                        <label for="login-chk">
                            <input type="checkbox" name="login-chk" id="login-chk"/>
                            Remember password
                        </label>
                        <a href="/forgotpassword">Forgot password</a>
                    </div>
                    <button type="submit">Login</button>
                    <p>Or login with</p>
                    <div className="login-social">
                        <a href="#" id="fb">Facebook</a>
                        <a href="#" id="gg">Google</a>
                    </div>
                    <p>Don't have an account? <a href="/register" className="switch">Register Now</a></p>
                </form>
            </div>
        </div>
    </div>
    </div>
    </>
    )
}

export default Login
