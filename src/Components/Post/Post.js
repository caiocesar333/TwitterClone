import React, { forwardRef } from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

const Post = forwardRef(
  ({ displayName, username, verified, text, image, avatar }, ref) => {
    return (
      <div className="post" ref={ref}>
        <div className="post__avatar">
        <Avatar alt="Jerome" src="https://randomuser.me/api/portraits/men/85.jpg" />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                {displayName}{" "}
                <span className="post__headerSpecial"> @
                  {username}
                </span>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>{text}</p>
            </div>
          </div>
          <img src={image} alt="" />
          <div className="post__footer">
            <ChatBubbleOutlineIcon  className="post__icon"  fontSize="small" /><span className="span">61</span>
            <RepeatIcon  className="post__icon" fontSize="small" /><span className="span">12</span>
            <FavoriteBorderIcon  className="post__icon" fontSize="small" /><span className="span">6,1</span>
            <PublishIcon className="post__icon"  fontSize="small" /><span className="span">61</span>
          </div>
          <span className="thread">Show this thread</span>
        </div>
      </div>
    );
  }
);

export default Post;
