import React from "react";

export interface ButtonSignUpProps {
    children?: any;
}

export function ButtonSignUp({ children }: ButtonSignUpProps) {
    const showError = () => {
        window.location.href = "page404.html"
    }


    return (
        <button onClick={showError}className="py-2 px-5 mr-8 bg-white  text-black border border-white font-sf font-normal text-sm rounded-full hover:opacity-100"> 
        Sign Up</button>
    )
}

export default ButtonSignUp