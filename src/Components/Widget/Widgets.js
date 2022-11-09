import React from "react";
import "./Widgets.css";
import "./style.css"

import { Container, SearchWrapper } from './style';
import SearchBar from "../SearchBar/SearchBar.tsx"
import WhatsHappening from "../WhatsHappening/WhatsHappening.tsx"
import WhoToFollow from "../WhoToFollow/WhoToFollow.tsx"


function Widgets() {
  return (
    <Container className="widget">
      <SearchWrapper>
        <SearchBar />
        <div className="wh-div">
          <WhatsHappening />
          <WhoToFollow />
        </div>
      </SearchWrapper>
    </Container>
  );
}

export default Widgets;
