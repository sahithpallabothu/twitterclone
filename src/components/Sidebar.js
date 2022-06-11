import React from "react";
import SidebarOptions from "./SidebarOptions";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Button from "@mui/material/Button";
import classes from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={classes.sidebar}>
      {/* Twitter Icon */}
      <TwitterIcon className={classes.twitterIcon} />
      {/* sidebar options */}
      <SidebarOptions active text="Home" Icon={HomeIcon} />
      <SidebarOptions text="Explore" Icon={SearchIcon} />
      <SidebarOptions text="Notifications" Icon={NotificationsIcon} />
      <SidebarOptions text="Messages" Icon={MailOutlineIcon} />
      <SidebarOptions text="Bookmark" Icon={BookmarkIcon} />
      <SidebarOptions text="Lists" Icon={ListAltIcon} />
      <SidebarOptions text="Profile" Icon={PermIdentityIcon} />
      <SidebarOptions text="More" Icon={MoreHorizIcon} />
      {/* Tweet Button */}
      <Button variant="outlined" className={classes.sidebarTweet} fullWidth>
        Tweet
      </Button>
    </div>
  );
};

export default Sidebar;
