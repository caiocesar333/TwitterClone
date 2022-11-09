import React  from 'react';
import { Container, Card } from "./style"
import "../../styles/global";
import { Avatar } from "@material-ui/core";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
import "./style.css"

export interface CardProps {
    children?: any;
    image?: any;
}


export function Cards({ children }: CardProps) {
    return (
        <Container>

            <div className="post__avatar">
                <Avatar alt="A" src='https://randomuser.me/api/portraits/men/7.jpg'/>
            </div>


            <Card className="card">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                            Devon Lane
                            <span className="post__headerSpecial">  @johndue
                            </span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>Tom is in a big hurry.</p>
                    </div>
                </div>
                <div >
                    <ChatBubbleOutlineIcon className="post__icon" fontSize="small" /><span className="span">61</span>
                    <RepeatIcon className="post__icon" fontSize="small" /><span className="span">12</span>
                    <FavoriteBorderIcon className="post__icon" fontSize="small" /><span className="span">6,1</span>
                    <PublishIcon className="post__icon" fontSize="small" /><span className="span">61</span>
                </div>

                <p className="thread">Show this thread</p>
            </Card>
        </Container>

    )
}

export default Cards