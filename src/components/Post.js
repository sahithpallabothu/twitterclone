import { Avatar } from "@mui/material";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import React, { forwardRef } from "react";
import classes from "./Post.module.css";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PublishIcon from "@mui/icons-material/Publish";

const Post = forwardRef(
  ({ displayName, username, verified, text, image, avatar }, ref) => {
    return (
      <div className={classes.post} ref={ref}>
        <div className={classes.avatar}>
          <Avatar alt="sahith" src={avatar} />
        </div>
        <div className={classes.postBody}>
          <div className={classes.postHeader}>
            <div className={classes.postHeaderText}>
              <h3>
                {displayName}
                {""}
                <span className={classes.postUserName}>
                  {verified && (
                    <VerifiedUserIcon className={classes.postBadge} />
                  )}
                  {username}
                </span>
              </h3>
            </div>
            <div className={classes.headerDescription}>
              <p>{text}</p>
            </div>
          </div>
          <img src={image} alt="Gif Not found" />
          <div className={classes.postFooter}>
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <PublishIcon fontSize="small" />
          </div>
        </div>
      </div>
    );
  }
);

export default Post;
