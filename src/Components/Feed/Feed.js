import React, { useState, useEffect } from "react";
import { Container, Header, NewTweet } from './style';
import "../../styles/global"
import TweetBox from "../TweetBox/TweetBox";
import Post from "../Post/Post";
import Cards from "../Cards/Cards"
import "./Feed.css";
import db from "../../firebase";
import FlipMove from "react-flip-move";
// import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';


function Main() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  return (
    <Container className="feed">
      <Header className="header">
        <strong class="home">Home</strong>
      </Header>

      <TweetBox />

      <NewTweet className="newtweet">
        <FlipMove>
          {posts.map((post) => (
            <Post
              key={post.text}
              displayName={post.displayName}
              username={post.username}
              verified={post.verified}
              text={post.text}
              avatar={post.avatar}
              image={post.image}
            />
          ))}
        </FlipMove>
      </NewTweet>
      <Cards />
    </Container>
  );
}


export default Main;
