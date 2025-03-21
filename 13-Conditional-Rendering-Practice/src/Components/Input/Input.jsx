import React from "react";
import './Input.css'

//USing Destructuring instead of hardcoded props
const Input = ({type, placeholder}) => {
    return(
        <div className="input-container">
            <input type={type} placeholder={placeholder} className="input"/>
        </div>
        
    )
}

export default Input;