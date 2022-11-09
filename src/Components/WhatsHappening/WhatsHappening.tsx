import React from 'react';

import { Container, Wrapper } from './style';
import {
  TwitterFollowButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
// import { width } from '@material-ui/system';

export interface WhatsHappeningProps {
  children?: any;
}


export function WhatsHappening({ children }: WhatsHappeningProps) {

  // const showError: any = () => {
  //   window.location.href = "page404.html"
  // }

  return (
    <Container>
      <Wrapper>
        <h3>What's happening</h3>

        <TwitterTweetEmbed cards={"hidden"} conversation={'none'} tweetId={"1588270046933049345"} width={"250"} />
        {/* <TwitterTweetEmbed conversation={'none'} tweetId={"1588274819795132419"} width={"250"} /> */}

        <TwitterFollowButton
          url={"https://twitter.com/UOL"}
          options={{ text: "#reactjs is awesome", via: "cleverqazi" }}
        />
      </Wrapper>
    </Container>
  );
}

export default WhatsHappening;