import React from 'react';

import { Container } from './style';


export interface NewProps {
    children?: any;
}


export function New2({ children }: NewProps) {
    return (
    <div className="flex flex-row">
        <Container>
            <span className="text-xs  text-gray">US news . 4h ago</span>
            <span className="font-medium">Parler may go offline following suspensions 
            by Amazon, Apple and Google</span>
            <div className="flex-row">
                <span className="text-xs  text-gray">Trending with</span> <span className="text-primary-blue">#trump</span>
            </div>
        </Container>
        <img className="w-16 rounded-2xl" src="src\assets\claro\new2.svg"></img>
    </div>
    );
}

export default New2;