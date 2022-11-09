import React from 'react';

import { Container } from './style';


export interface NewProps {
    children?: any;
}


export function New({ children }: NewProps) {
    return (
    <div className="flex flex-row">
        <Container>
            <span className="text-xs   text-gray">Covid . Last Night</span>
            <span className="font-medium">England’s Chief Medical Officer says the UK
                is at the most dangerous time of the pandemic</span>
            <div className="flex-row">
                <span className="text-xs  text-gray ">Trending with</span> <span className="text-primary-blue">#covid19</span>
            </div>
        </Container>
        <img className="w-16 rounded-2xl" src="src\assets\claro\new1.svg"></img>
    </div>
    );
}

export default New;