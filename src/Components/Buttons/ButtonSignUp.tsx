import React from "react";
import "./style.css"

export interface ButtonSignUpProps {
    children?: any;
}

export function ButtonSignUp({ children }: ButtonSignUpProps) {
    const showError = () => {
        window.location.href = "page404.html"
    }


    return (
        <button onClick={showError}className="buttonSignUp buttons"> 
        Sign Up</button>
    )
}

export default ButtonSignUp