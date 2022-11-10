import React from "react";
import "./style.css"

export interface ButtonLoginProps {
    children?: any;
}

export function ButtonLogin({ children }: ButtonLoginProps) {
    const showError = () => {
        window.location.href = "page404.html"
    }


    return (
        <button onClick={showError} className="buttonLogin buttons"> 
        Log In</button>
    )
}