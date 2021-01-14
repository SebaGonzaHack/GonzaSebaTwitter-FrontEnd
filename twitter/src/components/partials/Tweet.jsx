import React from "react";
import { useSelector } from "react-redux";
import LikeButton from "./LikeButton";
import { Link } from "react-router-dom";

const Tweet = ({ tweet }) => {
  const state = useSelector((state) => state);

  return (
    <div class="tweet-container">
      <div class="row">
        <div class="col-md-2">
          <Link to={`/users/${tweet.user.userName}`}>
            <img
              class="rounded-circle tweetAvatar"
              src={tweet.user.userPhoto}
            />
          </Link>
        </div>

        <div class="col-md-10">
          <strong>
            {tweet.user.firstName} {tweet.user.lastName}
          </strong>
          <Link to={`/users/${tweet.user.userName}`}>
            <span> @{tweet.user.userName} </span>
          </Link>

          <p>{tweet.text}</p>
        </div>
      </div>

      <hr />
      <span>{tweet.createdAt} | </span>
      <LikeButton tweet={tweet} userLiking={state.user} />
    </div>
  );
};

export default Tweet;
