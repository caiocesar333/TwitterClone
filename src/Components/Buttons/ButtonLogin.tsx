import React from "react";

export interface ButtonLoginProps {
    children?: any;
}

export function ButtonLogin({ children }: ButtonLoginProps) {
    const showError = () => {
        window.location.href = "page404.html"
    }


    return (
        <button onClick={showError} className="py-2 px-6 mr-8 bg-transparent  text-white border border-white font-sf font-normal text-sm rounded-full hover:opacity-100"> 
        Log In</button>
    )
}