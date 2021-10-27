import React from 'react'
import './Register.css'
import Header from "../components/header"
function Register() {
    return (
        <>
        <Header />
        <div className="reg-body"> 
        <div class="container-reg">
        <div class="logo">
            <h3>Service Fare</h3>
        </div>
            <div class="register-form toggle">
                <h2 className="heading2">Register</h2>
                <form autocomplete="off" className="regForm">
                    <input type="text" name="reg-fname" id="reg-fname" required placeholder="Enter your first name"/>
                    <input type="text" name="reg-lname" id="reg-lname" required placeholder="Enter your last name"/>
                    <input type="email" name="register-ml" id="register-ml" required placeholder="Enter your Email"/>
                    <input type="number" name="mobno" id="mobno" required placeholder="Enter your mobile number"/>
                    <input type="password" name="register-pd" id="register-pd" required placeholder="Enter your password"/>
                    <input type="password" name="register-cpd" id="register-cpd" required placeholder="Confirm your password"/>
                    <div class="register-row">
                        
                    </div>
                    <button type="submit" className="reg-btn">Register</button>
                    <p className="account">Do you have an account? <a href="/login" className="switch">Login Now</a></p>
                </form>
            </div>
        </div>
        </div>
        </>
    )
}

export default Register
