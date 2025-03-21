import React from "react";
import './Register.css'
import Input from '../../Components/Input/Input.jsx'

const Register = ()=>{
    return(
        <div className="register-container">

            <form className="login-form"  >
                <h2 className="register-header">Register</h2>
                <Input type="text"  placeholder = "Username"/>
                <Input type="password"  placeholder = "Password"/>
                <Input type="password"  placeholder = "Confirm Password"/>
                <button className="register-button">Register</button>      
            </form>    

        </div>
    )
}

export default Register;