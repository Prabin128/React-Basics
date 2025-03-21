import React from "react";
import  './Login.css'
import Input from '../../Components/Input/Input.jsx'


const Login = ()=>{
    return(

        <div className="login-container">

            <form className="login-form">
                <h2 className="login-header">Login</h2>
                <Input type="text"  placeholder = "Username"/>
                <Input type="password"  placeholder = "Password"/>
                <button className="login-button">Login</button>      
            </form>
            <div className="divider">
            <span>OR</span>
        </div>

        <button className="facebook-login-button">Login with Facebook</button>

        <div className="forgot-password">
        <a href="#">Forgot password?</a>
        </div>

        </div>
    )
}

export default Login;