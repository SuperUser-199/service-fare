import React from 'react'
import './profile.css'
import Header from "../components/header"
function Profile() {
    return (
        <>
        <Header />
        <div class="main">
            <div class="profile">
            <div class="col1">
                <div class="profile-image"> 
                 <img src="https://img.icons8.com/bubbles/100/000000/user.png" className="img-radius" alt="User-Profile-Image" /> 
                </div> 
                <h1>Avinash</h1>
                <a href="/"><button class="edit-button">Edit Profile</button></a>
            </div>
            <div class="col2">
                <h2>Information</h2>
                <hr/>
                <div class="info-main">
                    <div class="info-main-row">
                        <div  class="info-main-row-col">
                            <h4>Email</h4>
                            <p class="userinfo">user@emal.com</p>
                        </div>
                        <div class="info-main-row-col">
                            <h4>Mobile No.</h4>
                            <p class="userinfo">888888888</p>
                        </div>
                    </div>
                    <div class="info-main-row">
                        <div class="info-main-row-col">
                            <h4>Gender</h4>
                            <p class="userinfo">Male</p>
                        </div>
                        <div class="info-main-row-col">
                            <h4>Address</h4>
                            <p class="userinfo">City,District,State,pincode</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>      
        </>
           
    )
}

export default Profile
