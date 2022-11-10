import React, { useState } from "react";
import "./TweetBox.css";
import "../../styles/global"
import { Avatar } from "@material-ui/core";
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import GifBoxOutlinedIcon from '@mui/icons-material/GifBoxOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import db from "../../firebase";
import firebase from "firebase";
import serverTimestamp from "firebase/database";

// import ButtonTweet from "../Buttons/ButtonTweet"

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "Jerome Bell",
      username: "afonsoinocente",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png",
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      time: new Date()
      });


    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="container">
          <div className="tweetBox__input">
            <Avatar alt="Jerome" src="https://randomuser.me/api/portraits/men/85.jpg" />
            <input
              maxLength={380}
              className="input"
              onChange={(e) => setTweetMessage(e.target.value)}
              value={tweetMessage}
              placeholder="What's happening?"
              type="text"
            />
          </div>
          <div className="icon-container">
            <InsertPhotoOutlinedIcon className="icon" fontSize="medium " />
            <GifBoxOutlinedIcon className="icon" fontSize="medium" />
            <ListOutlinedIcon className="icon" fontSize="medium" />
            <EmojiEmotionsOutlinedIcon className="icon" fontSize="medium" />
            <CalendarMonthOutlinedIcon className="icon" fontSize="medium" />

            <div className="buttonBox">
              <button
                id="submit"
                onClick={sendTweet}
                type="submit"
                className="button buttonTweet"
              >
                Tweet
              </button>
            </div>
          </div>

        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />
      </form>
    </div>
  );
}

export default TweetBox;
