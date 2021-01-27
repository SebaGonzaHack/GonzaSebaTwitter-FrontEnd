import React from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { addLike, removeLike } from "../../redux/actions/actionsTweet";

const LikeButton = ({ tweet, userLiking }) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  function handleLike() {
    axios
      .post(
        `${process.env.REACT_APP_URL}/tweet/like`,
        {
          userLiking: userLiking,
          tweet: tweet,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${state.user.token}`,
          },
        }
      )
      .then((res) => {
        if (res.data === "removed") {
          dispatch(removeLike(userLiking._id, tweet._id));
        } else {
          dispatch(addLike(userLiking._id, tweet._id));
        }
      });
  }

  return (
    <>
      {tweet.likes.length == 0 || !tweet.likes.includes(state.user._id) ? (
        <span>
          <i class="far fa-heart mr-1" onClick={handleLike}></i>
          {tweet.likes.length}
        </span>
      ) : (
        <span>
          <i class="fas fa-heart mr-1" onClick={handleLike}></i>
          {tweet.likes.length}
        </span>
      )}
    </>
  );
};

export default LikeButton;
