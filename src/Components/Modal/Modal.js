import React from "react";
import useComment from "../../scripts/useComment";
import "./style.css"
import "../Post/Post.css"
import modalController from "../../scripts/modalController"
import { Avatar } from "@material-ui/core";
import CloseIcon from '@mui/icons-material/Close';

function Modal() {
    return (
        <div id="modal" class="modal">
            <div id="comment-container" className="comment-container ">
                    <CloseIcon className="close-icon" onClick={modalController}/>
                <form id="comment-form" className="comment-form">
                    <Avatar className="avatar-modal" sx={{ width: 10, height: 10 }} alt="Jerome" src="https://randomuser.me/api/portraits/men/85.jpg" />
                    <input id="comment-input" className="comment-input" placeholder="Tweet Your Reply"></input>
                    <button type="button" onClick={useComment} onClickCapture={modalController} id="comment-button" className="comment-button button buttonTweet">Send it</button>
                </form>
            </div>
        </div>

    )
}

export default Modal