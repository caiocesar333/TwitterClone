import React from 'react';

import { Container } from './style';
import "./style.css"
import new3 from '../../assets/claro/new3.svg'


export interface NewProps {
    children?: any;
}


export function New3({ children }: NewProps) {
    return (
    <div className="flex-new">
        <Container className="new">
            <span className="text-xs text-gray">India . 1h ago</span>
            <span className="font-medium">India vs Australia: India hold on to 
            earn a draw on Day 5 in Sydney Test</span>
            <div className="flex-row">
                <span className="text-xs  text-gray ">Trending with</span> <span className="thread">#sport</span>
            </div>
        </Container>
        <img className="w-16 rounded-2xl" alt='' src={new3}></img>
    </div>
    );
}

export default New3;