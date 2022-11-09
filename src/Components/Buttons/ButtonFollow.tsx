import React from "react"

import "./style.css"
export interface ButtonProps {
    children?: any;

}

export function ButtonFollow({ children }: ButtonProps) {

    return (
        <button className="button buttonFollow ">Follow</button>
    )
}