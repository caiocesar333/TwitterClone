import React from 'react';
import { Container, Card, ProfileImage, Banner } from "./style"

export interface CardNewProps {
    children?: any;
}

export function CardNew({ children }: CardNewProps) {
    return (
        <Container>
            <ProfileImage>
                <img className='rounded-full' src="src\assets\claro\pfp2.svg"></img>
            </ProfileImage>
            <Card>
                <div className='flex'>
                    <h4 className="font-bold mr-1">Devon Lane</h4>
                    <h6>@johndue</h6>
                </div>

                <p>ASGASJGASIOGJAOSG</p>
               <Banner>
                <img className="max-w-lg max-h-xs mt-2 rounded-2xl" src="src\assets\claro\banner1.png" />
               </Banner>

                <p className="text-primary-blue">Show this thread</p>
            </Card>
        </Container>
        
    )
}

export default CardNew