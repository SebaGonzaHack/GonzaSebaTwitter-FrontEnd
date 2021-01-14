import React from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { followUser, unfollowUser } from "../../redux/actions/user";

const FollowButton = ({ userVisited, username, user }) => {
  const state = useSelector((state) => state.user);
  const dispatch = useDispatch();

  function handleFollow() {
    axios
      .post(
        `http://localhost:8000/users/follow/${username}`,
        {
          username: state.userName,
          userToFollow: username,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${state.token}`,
          },
        }
      )
      .then((res) => {
        dispatch(followUser(state));
      });
  }
  function handleUnfollow() {
    axios
      .post(
        `http://localhost:8000/users/unfollow/${username}`,
        {
          username: state.userName,
          userToUnfollow: username,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${state.token}`,
          },
        }
      )
      .then((res) => {
        dispatch(unfollowUser(state));
      });
  }

  return (
    <>
      {state.visited && state.visited.userFollowers.length === 0 && (
        <button className="btn btn-primary" onClick={handleFollow}>
          Seguir
        </button>
      )}
      {state.visited &&
        state.visited.userFollowers.map((user) =>
          user.userName === state.userName ? (
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
