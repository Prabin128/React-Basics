import React from "react"; 
import Input from "./Input";

const Login = () => {
    return ( 
        <div>
            <form>
                <Input type="text" placeholder="User Name"/>
                <Input type="text" placeholder="User Name"/>
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login;