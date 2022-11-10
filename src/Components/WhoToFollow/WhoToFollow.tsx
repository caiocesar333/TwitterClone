import React from 'react';

import { Wrapper, Container } from './style';
import "./style.css"

import Avatar from '@material-ui/core/Avatar';
import { ButtonFollow } from '../Buttons/ButtonFollow';



export interface WhoToFollowProps {
  children?: any;
}


export function WhoToFollow({ children }: WhoToFollowProps) {
  return (
    <Container className='who-to'>
      <Wrapper>
        <h3>Who to follow</h3>
        <div className="flex">
          <div className='profile'>
            <Avatar src='https://randomuser.me/api/portraits/men/8.jpg' />
            <div className="text-div">
              <span className="username">Bessie Cooper</span>
              <span className="at">@alessandroveronezi</span>
            </div>
          </div>
          <div className='profile'>
            <Avatar src='https://randomuser.me/api/portraits/women/8.jpg' />
            <div className="text-div">
              <span className="username">Jenny Wilson</span>
              <span className="at">@gabrielcantarin</span>
            </div>
          </div>
        </div>
        <span className="thread">Show more</span>
      </Wrapper>
      <div className="button-div">
        <ButtonFollow> Follow</ButtonFollow>
        <ButtonFollow> Follow</ButtonFollow>
      </div>
    </Container>
  );
}

export default WhoToFollow;