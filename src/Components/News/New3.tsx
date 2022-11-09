import React from 'react';

import { Container } from './style';


export interface NewProps {
    children?: any;
}


export function New3({ children }: NewProps) {
    return (
    <div className="flex flex-row">
        <Container>
            <span className="text-xs text-gray">India . 1h ago</span>
            <span className="font-medium">India vs Australia: India hold on to 
            earn a draw on Day 5 in Sydney Test</span>
            <div className="flex-row">
                <span className="text-xs  text-gray ">Trending with</span> <span className="text-primary-blue">#sport</span>
            </div>
        </Container>
        <img className="w-16 rounded-2xl" src="src\assets\claro\new3.svg"></img>
    </div>
    );
}

export default New3;