import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import actions from "../redux/actions/actions";
import { Link } from "react-router-dom";
import Nav from "./partials/Nav";
import axios from "axios";

function Profile() {
  const state = useSelector((state) => state);
  const [user, setUser] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/profile/${state.twitterReducer.username}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${state.twitterReducer.token}`,
        },
      })
      .then((res) => {
        setUser(res.data);
      });
  }, []);

  return (
    <>
      <Nav />
      <div className="container">
        <div class="row">
          <div class="col-md-2">
            <img class="rounded-circle profileAvatar" src="user.userPhoto" />
          </div>

          <div class="col-md-10">
            <p>{user && user.bio}</p>
          </div>

          <hr />

          <span>Seguidores: {user && user.userFollowers.length} | </span>
          <span>Siguiendo: {user && user.userFollowing.length}</span>
        </div>
        <div className="row">
          <div className="col-md-6">
            {user &&
              user.userTweets.map((twit) => {
                return (
                  <div class="tweet-container">
                    <div class="row">
                      <div class="col-md-2">
                        <Link
                          to={`http://localhost:3000/profile/$twit.user.userName`}
                        >
                          <img
                            class="rounded-circle tweetAvatar"
                            src="{twit.user.userPhoto}"
                          />
                        </Link>
                      </div>

                      <div class="col-md-10">
                        <strong>
                          {user.firstName} {user.lastName}
                        </strong>
                        <Link
                          to={`http://localhost:3000/profile/$twit.user.userName`}
                        >
                          <span> @{user.userName} </span>
                        </Link>

                        <p>{twit.text}</p>
                      </div>
                    </div>

                    <hr />
                    <span>{twit.createdAt} | </span>

                    <span>
                      <Link
                        to="http://localhost:3000/tweet/like/${twit._id}"
                        method="POST"
                      >
                        <i class="far fa-heart mr-1"></i>
                      </Link>
                      {twit.likes.length}
                    </span>
                  </div>
                );
              })}
          </div>

          <div className="col-md-6">
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
                ></textarea>
              </div>

              <button type="submit" class="btn btn-primary">
                Twitear
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
