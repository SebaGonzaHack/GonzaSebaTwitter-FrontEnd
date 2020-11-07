import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const FollowButton = ({ userVisited, username, user }) => {
  const state = useSelector((state) => state);
  function handleFollow() {
    axios.post(
      `http://localhost:8000/users/follow/${username}`,
      {
        username: state.twitterReducer.username,
        userToFollow: username,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${state.twitterReducer.token}`,
        },
      }
    );
  }
  function handleUnfollow() {
    axios.post(
      `http://localhost:8000/users/unfollow/${username}`,
      {
        username: state.twitterReducer.username,
        userToUnfollow: username,
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
      {userVisited && userVisited.userFollowers.length === 0 && (
        <button className="btn btn-primary" onClick={handleFollow}>
          Seguir
        </button>
      )}
      {userVisited &&
        userVisited.userFollowers.map((user) =>
          user.userName === state.twitterReducer.username ? (
            <button className="btn btn-danger" onClick={handleUnfollow}>
              Dejar de seguir
            </button>
          ) : (
            <button className="btn btn-primary" onClick={handleFollow}>
              Seguir
            </button>
          )
        )}
    </>
  );
};

export default FollowButton;
