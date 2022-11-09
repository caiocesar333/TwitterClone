import React from "react"

import "./style.css";

export interface ButtonProps {
    children?: any;
    class: string
}

export function ButtonDefault({ children }: ButtonProps) {

    const showError:any = () => {
        window.location.href = "page404.html"
    }


    return (
        <button onClick={showError} className="button buttonDefault " >
            Tweet</button>
    )
}

