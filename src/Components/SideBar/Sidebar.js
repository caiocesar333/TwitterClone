import React from "react";
import "./Sidebar.css";
import "../../styles/global";
import {
  Container,
  Topside,
  MenuButton,
} from "./style"

import TwitterIcon from "@material-ui/icons/Twitter";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import TagIcon from '@mui/icons-material/Tag';
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import PendingOutlinedIcon from '@mui/icons-material/PendingOutlined';
import { ButtonDefault } from "../Buttons/ButtonDefault";
import { Profile } from "../Profiles/Profile";


function Sidebar() {
  return (
    <div >
      <Container className="sidebar">
        <TwitterIcon className="sidebar__twitterIcon" />
        <Topside>
          <MenuButton>
            <SidebarOption active Icon={HomeIcon } text="Home" className="sidebarOption" />
            <SidebarOption Icon={TagIcon} text="Explore"  className="sidebarOption"/>
            <SidebarOption Icon={NotificationsNoneIcon} text="Notifications"  className="sidebarOption"/>
            <SidebarOption Icon={MailOutlineIcon} text="Messages"  className="sidebarOption"/>
            <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" className="sidebarOption" />
            <SidebarOption Icon={ListAltIcon} text="Lists" className="sidebarOption" />
            <SidebarOption Icon={PermIdentityIcon} text="Profile"  className="sidebarOption"/>
            <SidebarOption Icon={PendingOutlinedIcon} text="More" className="sidebarOption" />
          </MenuButton>
        </Topside>

        {/* Button -> Tweet */}
        <ButtonDefault></ButtonDefault>
        <Profile />
      </Container>
    </div>
  );
}

export default Sidebar;
