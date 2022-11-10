import React from 'react';

import { Container } from './style';
import { New } from '../News/New';
import { New2 } from '../News/New2';
import { New3 } from '../News/New3';

export interface WhatsHappeningProps {
  children?: any;
}


export function WhatsHappening({ children }: WhatsHappeningProps) {

  // const showError: any = () => {
  //   window.location.href = "page404.html"
  // }

  return (
    <Container className="whatsHapp">
      <h3 className="font-bold"> Whats Happening </h3>
      <New />
      <New2 />
      <New3 />  
      <p className="thread">Show More</p>
    </Container>
  );
}

export default WhatsHappening;