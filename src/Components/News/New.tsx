import React from 'react';

import { Container } from './style';
import "./style.css"
import new1 from '../../assets/claro/new1.svg'

export interface NewProps {
    children?: any;
}


export function New({ children }: NewProps) {
    return (
    <div className="flex-new">
        <Container className="new">
            <span className="text-xs">Covid . Last Night</span>
            <span className="font-medium">England’s Chief Medical Officer says the UK
                is at the most dangerous time of the pandemic</span>
            <div className="flex-row">
                <span className="text-xs ">Trending with</span> <span className="thread">#covid19</span>
            </div>
        </Container>
        <img alt="" className="w-16" src={new1}></img>
    </div>
    );
}

export default New;