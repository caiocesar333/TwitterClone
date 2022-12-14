import React, { forwardRef } from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
import Like from "../../scripts/like"
import commentController from "../../scripts/commentController";
import Modal from "../Modal/Modal"



const Post = forwardRef(
  ({ displayName, username, verified, text, image, avatar, time }, ref) => {

    if (time == null) {
      var timer = "now";
    } else {
      let date = time.toDate()

      const timeDiff = (postTime) => {
        const now = new Date();
        // Do your operations
        const seconds = ((now.getTime() - postTime.getTime()) / 1000) - 15;

        let timing = '';

        if (seconds < 1)
          timing = 'now';
        else if (seconds < 60)
          timing = `${seconds.toFixed(0)}s`
        else if (seconds < 3600)
          timing = `${(seconds / 60).toFixed(0)}m`
        else if (seconds < 3600 * 24)
          timing = `${(seconds / (3600)).toFixed(0)}h`
        else
          timing = `${(seconds / (3600 * 24)).toFixed(0)}d`


        return timing;
      }

      var timer = timeDiff(date);

    }

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
                <p className="time">{timer}</p>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>{text}</p>
            </div>
          </div>
          <img src={image} alt="" />
          <div className="post__footer">
            <Modal />
            <ChatBubbleOutlineIcon onClick={commentController} id="chat" className="post__icon" fontSize="small" /><span className="span"></span>
            <RepeatIcon className="post__icon" fontSize="small" /><span className="span"></span>
            <FavoriteBorderIcon onClick={Like} id="favorite" className="post__icon" fontSize="small" />
            <span className="span">
              <p id="liked"></p>
            </span>
            <PublishIcon className="post__icon" fontSize="small" /><span className="span"></span>
          </div>
          <div className="container-div hidden">
            <div id="comment" className="hidden">
              <Avatar style={{ height: '30px', width: '30px' }} alt="Jerome" src="https://randomuser.me/api/portraits/men/85.jpg" />
              <p className="commentName">{displayName}</p>
              <p className="commentUser">@{username}</p>
            </div>
            <div id="comment-text" className="comment-text">

            </div>

          </div>
          <p className="thread">Show this thread</p>

        </div>
      </div>
    );
  }
);

export default Post;
