import React from 'react';

import { Container, Wrapper } from './style';

import { ButtonSignUp } from "../Buttons/ButtonSignUp"
import redirect from "../../scripts/redirect"

export interface FooterProps {
    children?: any;
}


export function Footer({ children }: FooterProps) {
    return (
        <Container className="footer">
            <Wrapper>
                <div className="ml-36 flex flex-col">
                    <h2 className="font-bold text-md">Dont miss what's happening</h2>
                    <span className="text-sm">People on twitter are the first to know</span>
                </div>
                <button className='buttons buttonLogin' onClick={redirect} >Log In</button>          
            </Wrapper>
            <div className="mt-5 items-center">
            <ButtonSignUp />
            </div>
        </Container>
    );
}

export default Footer;