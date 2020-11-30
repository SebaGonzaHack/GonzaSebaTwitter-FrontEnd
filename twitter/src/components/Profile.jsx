import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams, useHistory } from "react-router-dom";
import axios from "axios";
import FollowButton from "./partials/FollowButton";
import LikeButton from "./partials/LikeButton";
import Navigation from "./partials/Navigation";
import Sidebar from "./partials/Sidebar";
import { profileVisited } from "../redux/actions/user";

function Profile() {
  const state = useSelector((state) => state);
  const user = useSelector((state) => state.user);

  const { username } = useParams();
  const [userVisited, setUserVisited] = useState();
  const [text, setText] = useState();
  const history = useHistory();
  const dispatch = useDispatch();

  function handleTweetPost() {
    axios
      .post(
        `http://localhost:8000/tweets`,
        {
          twitContent: text,
          username: state.user.username,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${state.token}`,
          },
        }
      )
      .then((res) => {
        history.push(`/users/${username}`);
        dispatch();
      });
  }

  useEffect(() => {
    axios
      .get(`http://localhost:8000/users/${username}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${state.token}`,
        },
      })
      .then((res) => {
        setUserVisited(res.data);
        dispatch();
        dispatch(profileVisited(res.data));
      });
  }, []);

  return (
    <>
      <Navigation />
      <div className="container">
        <div className="row">
          <div className="col-2 sideCol">{Sidebar}</div>
          <div className="col-8">
            <div class="row mt-5">
              <div class="col-md-2">
                <img
                  class="rounded-circle profileAvatar"
                  src="user.userPhoto"
                />
              </div>

              <div class="col-md-10">
                <h3>
                  {userVisited && (
                    <span>
                      {userVisited.firstName} {userVisited.lastName}
                    </span>
                  )}
                </h3>
                <p>{userVisited && userVisited.bio}</p>
              </div>
              <hr />

              <FollowButton username={username} userVisited={userVisited} />

              <span>
                Seguidores: {userVisited && userVisited.userFollowers.length} |{" "}
              </span>
              <span>
                Siguiendo: {userVisited && userVisited.userFollowing.length}
              </span>
            </div>
            <div className="row mt-4">
              {state.user.username === username && (
                <div className="col">
                  <form action="/tweets" method="POST">
                    <div class="form-group">
                      <label for="twitContent">Escribe tu twit aquí</label>
                      <textarea
                        name="twitContent"
                        id="twitContent"
                        class="form-control"
                        cols="10"
                        rows="10"
                        placeholder="¿Qué está pasando?"
                        type="text"
                        onChange={(e) => {
                          setText(e.target.value);
                        }}
                      ></textarea>
                    </div>

                    <button
                      type="button"
                      class="btn btn-primary"
                      onClick={() => {
                        handleTweetPost();
                      }}
                    >
                      Twitear
                    </button>
                  </form>
                </div>
              )}
            </div>
            <div className="row mt-4">
              <div className="col">
                {userVisited &&
                  state.user.tweets &&
                  state.user.tweets
                    .map((twit) => {
                      return (
                        <div class="row tweet-container">
                          <div class="col-md-2">
                            <Link to={`/users/${userVisited.userName}`}>
                              <img
                                class="rounded-circle tweetAvatar"
                                src="{twit.user.userPhoto}"
                              />
                            </Link>
                          </div>

                          <div class="col-md-10">
                            <strong>
                              {userVisited.firstName} {userVisited.lastName}
                            </strong>
                            <Link to={`/users/${userVisited.userName}`}>
                              <span> @{userVisited.userName} </span>
                            </Link>

                            <p>{twit.text}</p>
                          </div>
                          <hr />
                          <span>{twit.createdAt} | </span>

                          <LikeButton
                            twit={twit}
                            userLiking={state.user.user}
                          />
                        </div>
                      );
                    })
                    .reverse()}
              </div>
            </div>
          </div>
          <div className="col-2 sideCol"></div>
        </div>
      </div>
    </>
  );
}

export default Profile;
