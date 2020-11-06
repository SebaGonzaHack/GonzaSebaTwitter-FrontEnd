import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams, useHistory } from "react-router-dom";
import Nav from "./partials/Nav";
import axios from "axios";
import { createTweet } from "../redux/actions/actions";

function Profile() {
  const state = useSelector((state) => state);
  const { username } = useParams();
  const [userVisited, setUserVisited] = useState();
  const [text, setText] = useState();
  const history = useHistory();

  function handleTweetPost() {
    axios
      .post(
        `http://localhost:8000/twitear`,
        {
          twitContent: text,
          username: state.twitterReducer.username,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${state.twitterReducer.token}`,
          },
        }
      )
      .then((res) => {
        history.push(`/profile/${username}`);
      });
  }

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

  useEffect(() => {
    axios
      .get(`http://localhost:8000/profile/${username}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${state.twitterReducer.token}`,
        },
      })
      .then((res) => {
        setUserVisited(res.data);
      });
  }, []);

  return (
    <>
      <Nav />
      <div className="container">
        <div class="row mt-5">
          <div class="col-md-2">
            <img class="rounded-circle profileAvatar" src="user.userPhoto" />
          </div>

          <div class="col-md-10">
            <p>{userVisited && userVisited.bio}</p>
            {userVisited && console.log(userVisited)}
          </div>
          <hr />
          {userVisited && userVisited.userFollowers.length === 0 && (
            <button className="btn btn-primary" onClick={handleFollow}>
              Seguir
            </button>
          )}
          {userVisited &&
            userVisited.userFollowers.map((user) => {
              return user.userName === state.twitterReducer.username ? (
                <button className="btn btn-danger" onClick={handleUnfollow}>
                  Dejar de seguir
                </button>
              ) : (
                <button className="btn btn-primary" onClick={handleFollow}>
                  Seguir
                </button>
              );
            })}

          <span>
            Seguidores: {userVisited && userVisited.userFollowers.length} |{" "}
          </span>
          <span>
            Siguiendo: {userVisited && userVisited.userFollowing.length}
          </span>
        </div>
        <div className="row mt-4">
          <div className="col">
            {userVisited &&
              userVisited.userTweets
                .map((twit) => {
                  return (
                    <div class="tweet-container">
                      <div class="row">
                        <div class="col-md-2">
                          <Link to={`/profile/${userVisited.userName}`}>
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
                          <Link to={`/profile/${userVisited.userName}`}>
                            <span> @{userVisited.userName} </span>
                          </Link>

                          <p>{twit.text}</p>
                        </div>
                      </div>

                      <hr />
                      <span>{twit.createdAt} | </span>

                      <span>
                        <Link
                          to={`http://localhost:3000/tweet/like/${twit._id}`}
                          method="POST"
                        >
                          <i class="far fa-heart mr-1"></i>
                        </Link>
                        {twit.likes.length}
                      </span>
                    </div>
                  );
                })
                .reverse()}
          </div>

          {state.twitterReducer.username === username && (
            <div className="col">
              <form action="/twitear" method="POST">
                <div class="form-group">
                  <label for="twitContent">Escribe tu twit aquí</label>
                  <textarea
                    name="twitContent"
                    id="twitContent"
                    class="form-control"
                    cols="30"
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
      </div>
    </>
  );
}

export default Profile;
