import React, { useEffect, useState } from "react";
import classes from "./Feed.module.css";
import TweetBox from "./TweetBox";
import Post from "./Post";
import db from "./firebase";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import FlipMove from "react-flip-move";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "posts"), orderBy("username", "desc"));
    onSnapshot(q, (querySnapshot) => {
      setPosts(querySnapshot.docs.map((doc) => doc.data()));
    });
  }, []);
  return (
    <div className={classes.feed}>
      <div className={classes.feedHead}>
        {/* Header */}
        <h2>Home</h2>
      </div>

      {/* tweetbox */}
      <TweetBox />

      {/* Post */}
      <FlipMove>
        {posts &&
          posts.map((post) => (
            <Post
              key={post.id}
              displayName={post.displayName}
              username={post.username}
              verified={post.verified}
              text={post.text}
              image={post.image}
              avatar={post.avatar}
            />
          ))}
      </FlipMove>
    </div>
  );
};

export default Feed;
