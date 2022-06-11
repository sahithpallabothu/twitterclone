import React, { useState } from "react";
import classes from "./TweetBox.module.css";
import { Avatar, Button } from "@mui/material";
import db from "./firebase";
import { collection, addDoc } from "firebase/firestore";

const TweetBox = (props) => {
  const [tweet, setTweet] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = async (event) => {
    event.preventDefault();
    try {
      await addDoc(collection(db, "posts"), {
        avatar: "./photo.jpg",
        displayName: "Sahith",
        image: tweetImage,
        text: tweet,
        username: "@sahithpallabothu",
        verified: true,
        id: Math.random(),
      });
      setTweet("");
      setTweetImage("");
    } catch (err) {
      alert(err);
    }
  };
  return (
    <div className={classes.tweetBox}>
      <form>
        <div className={classes.tweetBoxInput}>
          <Avatar alt="sahith" src="/photo.jpg" />
          <input
            onChange={(e) => setTweet(e.target.value)}
            value={tweet}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          className={classes.tweetBoxImageInput}
          onChange={(event) => setTweetImage(event.target.value)}
          value={tweetImage}
          placeholder="Optional:Enter Image Url"
        />
        <Button
          type="submit"
          onClick={sendTweet}
          className={classes.tweetButton}
        >
          Tweet
        </Button>
      </form>
    </div>
  );
};

export default TweetBox;
