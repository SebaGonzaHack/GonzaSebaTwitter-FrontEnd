import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const LikeButton = ({ twit, userLiking }) => {
  const state = useSelector((state) => state);

  function handleLike() {
    axios.post(
      `http://localhost:8000/tweet/like`,
      {
        userLiking: userLiking,
        twit: twit,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${state.twitterReducer.token}`,
        },
      }
    );
  }

  return (
    <>
      <span>
        <i class="far fa-heart mr-1" onClick={handleLike}></i>
        {twit.likes.length}
      </span>
    </>
  );
};

export default LikeButton;
