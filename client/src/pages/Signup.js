import React, { useState } from 'react'
import './Register.css'
import Header from "../components/header"
import axios from 'axios'
function Signup() {

    const [user, setUser] = useState({
        email: "",
        pwd: "",
        confirmpwd: ""
    })

    const handleUser = (e) => {
        const {name, value} = e.target;
        setUser(prevState => ({...prevState, [name] : value}));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);
        if (user.email && user.pwd && user.confirmpwd && user.pwd === user.confirmpwd) {
            axios.post('/signup', user)
            .then(res => console.log(res))
            .catch(err => console.log(err));
        }
    }

    return (
        <>
        <Header />
        <div className="reg-body"> 
        <div class="container-reg">
        <div class="logo">
            <h3>Service Fare</h3>
        </div>
            <div class="register-form toggle">
                <h2 className="heading2">Signup</h2>
                <form autocomplete="off" className="regForm" onSubmit={handleSubmit}>
                    <input type="email" name="email" id="register-ml" required placeholder="Enter your Email" onChange={handleUser}/>
                    <input type="password" name="pwd" id="register-pd" required placeholder="Enter your password" onChange={handleUser}/>
                    <input type="password" name="confirmpwd" id="register-cpd" required placeholder="Confirm your password" onChange={handleUser}/>
                    <div class="register-row">
                        
                    </div>
                    <button type="submit" className="reg-btn">SignUp</button>
                    <p className="account">Do you have an account? <a href="/login" className="switch">Login Now</a></p>
                </form>
            </div>
        </div>
        </div>
        </>
    )
}

export default Signup
