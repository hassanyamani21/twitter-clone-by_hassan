import React from 'react';
import "./Sidebar.css";
import SidebarOption from "./SidebarOptions"
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Button } from "@material-ui/core";



function Sidebar() {
    return (
        <div className ="Sidebar" >
           {/* twitter-icon  */}
           <TwitterIcon  className="twitter__icon"/>
           <SidebarOption active Icon={HomeIcon} text ="Home"/>
           <SidebarOption Icon={SearchIcon} text ="Explore"/>
           <SidebarOption Icon={NotificationsNoneIcon} text="Notification" />
           <SidebarOption Icon={MailOutlineIcon} text ="Messages"/>
           <SidebarOption Icon={BookmarkBorderIcon} text ="Bookmars"/>   
           <SidebarOption Icon={ListAltIcon} text ="List"/>
           <SidebarOption Icon={PermIdentityIcon} text ="Profile"/>
           <SidebarOption Icon={MoreHorizIcon} text ="More"/>
           {/* twitter-icon-option */}

           {/* twitter-icon-option */}
           {/* twitter-icon-option */}
           {/* twitter-icon-option */}
           {/* tweet-button */}
           <Button variant="outlined" className="sidebar__tweet" fullWidth>Tweet</Button>
           
        </div>
    )
}

export default Sidebar
