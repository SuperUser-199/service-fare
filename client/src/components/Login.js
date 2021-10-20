import React from 'react'
import './Style.css'

function Login() {
    return (
        <div class="container">
        <div class="logo">
            <h3>Service Fare</h3>
        </div>
        <div class="row">
            <div class="login-form">
                <h2>Login</h2>
                <form autocomplete="off">
                    <input type="email" name="login-ml" id="login-ml" required placeholder="Enter your Email"/>
                    <input type="password" name="login-pd" id="login-pd" required placeholder="Enter your password"/>
                    
                    <div class="login-row">
                        <label for="login-chk">
                            <input type="checkbox" name="login-chk" id="login-chk"/>
                            Remember password
                        </label>
                        <a href="/forgotpassword">Forgot password</a>
                    </div>
                    <button type="submit">Login</button>
                    <p>Or login with</p>
                    <div class="login-social">
                        <a href="#" id="fb">Facebook</a>
                        <a href="#" id="gg">Google</a>
                    </div>
                    <p>Don't have an account? <a href="/register" class="switch">Register Now</a></p>
                </form>
            </div>
        </div>
    </div>
    )
}

export default Login
