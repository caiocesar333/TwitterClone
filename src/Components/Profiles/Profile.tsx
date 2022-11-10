import React from "react";

import { Container } from './style';
import { Avatar } from "@material-ui/core";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import './style.css'

export interface ProfileProps {
    children?: any;
}

export function Profile({ children }: ProfileProps) {

    return (
        <Container>
            <Avatar alt="" src='https://randomuser.me/api/portraits/men/85.jpg'/>
            <div className="user-div"> 
                <span className="username">Jerome</span>
                <span className="at">@afonsoinocente</span>
            </div>
            <MoreHorizIcon/>
        </Container>
    )
}

export default Profile;