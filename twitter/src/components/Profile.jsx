import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import FollowButton from "./partials/FollowButton";
import LikeButton from "./partials/LikeButton";
import Navigation from "./partials/Navigation";
import { profileVisited } from "../redux/actions/user";
import Tweet from "./partials/Tweet";
import { addTweet } from "../redux/actions/actionsTweet";

function Profile() {
  const user = useSelector((state) => state.user);
  const userVisited = useSelector((state) => state.user.visited);
  const { username } = useParams();
  const [text, setText] = useState();
  const dispatch = useDispatch();

  function handleTweetPost() {
    axios
      .post(
        `http://localhost:8000/tweets`,
        {
          twitContent: text,
          username: user.username,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
        }
      )
      .then((res) => {
        dispatch(addTweet(res.data));
      });
  }

  useEffect(() => {
    axios
      .get(`http://localhost:8000/users/${username}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((res) => {
        dispatch(profileVisited(res.data));
      });
  }, []);

  return (
    <>
      <Navigation />
      <div className="container">
        <div className="row">
          <div className="col-3 sideCol">
            <Link className="side-link" to="/">
              Mini-Twitter
            </Link>
            <Link className="side-link" to="/">
              Home
            </Link>
            <Link className="side-link" to={`/users/${user.userName}`}>
              Perfil
            </Link>
            <Link className="side-link" to={"/edit"}>
              Editar Perfil
            </Link>
          </div>
          <div className="col-6">
            <div class="row mt-5">
              <div class="col-md-2">
                <img class="rounded-circle profileAvatar" src={user.visited} />
              </div>

              <div class="col-md-10">
                <h2>
                  {userVisited && (
                    <span className="profile-name">
                      {userVisited.firstName} {userVisited.lastName}
                    </span>
                  )}
                </h2>
                <p>{userVisited && userVisited.bio}</p>
              </div>
              <hr />

              <FollowButton username={username} userVisited={userVisited} />

              <span>
                Seguidores: {user.visited && user.visited.userFollowers.length}{" "}
                |{" "}
              </span>
              <span>
                <strong className="pr-1">
                  {userVisited && userVisited.userFollowing.length}
                </strong>
                Seguidos
              </span>
            </div>
            <div className="row mt-4">
              {user.username === username && (
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
                {user.visited &&
                  user.visited.userTweets
                    .map((tweet) => {
                      return <Tweet tweet={tweet} />;
                    })
                    .reverse()}
              </div>
            </div>
          </div>
          <div className="col-3 sideCol"></div>
        </div>
      </div>
    </>
  );
}

export default Profile;
