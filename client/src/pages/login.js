import React, { useState } from 'react'
import axios from 'axios';
import './login.css'
import Header from "../components/header"
function Login() {
    const [user, setUser] = useState({
        email: "",
        password: "",
        remPassword: "off",

    })

    const handleUser = (e) => {
        const {name, value} = e.target;
        setUser((prevState) => {
            return {...prevState, [name] : value};
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);
        if (user.email && user.password) {
            axios.post('/login', user)
            .then(res => console.log(res))
            .catch(err => console.log(err))
        }
    }

    return (
        <>
        <Header />
        <div className="reg-body"> 
        <div className="container-login">
        <div className="logo">
            <h3>Service Fare</h3>
        </div>
        <div className="row">
            <div className="login-form">
                <h2>Login</h2>
                <form autocomplete="off" onSubmit={handleSubmit}>
                    <input type="email" name="email" id="login-ml" required placeholder="Enter your Email" onChange={handleUser}/>
                    <input type="password" name="password" id="login-pd" required placeholder="Enter your password" onChange={handleUser}/>
                    
                    <div className="login-row">
                        <label for="login-chk">
                            <input type="checkbox" name="remPassword" id="login-chk" onChange={handleUser}/>
                            Remember password
                        </label>
                        <a href="/forgotpassword">Forgot password</a>
                    </div>
                    <button type="submit">Login</button>
                    <p>Or login with</p>
                    <div className="login-social">
                        <a href="/" id="fb">Facebook</a>
                        <a href="/" id="gg">Google</a>
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
