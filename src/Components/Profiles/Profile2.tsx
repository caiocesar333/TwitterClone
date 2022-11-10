
import React from "react"
import { Wrapper } from './styleSide'
import { ButtonFollow } from '../Buttons/ButtonFollow';

export interface ProfileProps {
    children?: any;
}

export function Profile2({ children }: ProfileProps) {

    return (
        <div className="w-80 mb-4 pt-2 flex-row justify-center">
            <Wrapper>
                <img className="mr-2 rounded-full" src="src\assets\claro\pfp5.svg" alt=""></img>
                <div className="flex flex-col">
                    <span className="font-bold">Jenny Wilson</span>
                    <span className="font-normal text-sm">@gabrielcantarin</span>
                </div>
            </Wrapper>
            
            <ButtonFollow />
        </div>
    )
}

export default Profile2;