import React from "react";
export interface ButtonTProps {
    children?: any;
}

export function ButtonTweet({ children }: ButtonTProps) {
        

    return (
        <button className="button buttonTweet"> 
        Tweet</button>
    )
    

}

export default ButtonTweet