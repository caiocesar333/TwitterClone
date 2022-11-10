import React from 'react';

import { Container } from './style';
import "./style.css"
import new2 from '../../assets/claro/new2.svg'


export interface NewProps {
    children?: any;
}


export function New2({ children }: NewProps) {
    return (
    <div className="flex-new">
        <Container className="new">
            <span className="text-xs  text-gray">US news . 4h ago</span>
            <span className="font-medium">Parler may go offline following suspensions 
            by Amazon, Apple and Google</span>
            <div className="flex-row">
                <span className="text-xs  text-gray">Trending with</span> <span className="thread">#trump</span>
            </div>
        </Container>
        <img className="w-16 rounded-2xl" alt='' src={new2}></img>
    </div>
    );
}

export default New2;