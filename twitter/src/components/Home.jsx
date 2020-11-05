import Axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Nav from "./partials/Nav";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  const state = useSelector((state) => state);
  const [tweet, setTweet] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/tweets/`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${state.twitterReducer.token}`,
        },
      })
      .then((res) => {
        setTweet(res.data);
      });
  }, []);

  return (
    <>
      <Nav />
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            {tweet &&
              tweet.map((twit) => {
                return (
                  <div class="tweet-container">
                    <div class="row">
                      <div class="col-md-2">
                        <Link to={`/profile/${twit.user.userName}`}>
                          <img
                            class="rounded-circle tweetAvatar"
                            src="{twit.user.userPhoto}"
                          />
                        </Link>
                      </div>

                      <div class="col-md-10">
                        <strong>
                          {twit.user.firstName} {twit.user.lastName}
                        </strong>
                        <Link to={`/profile/${twit.user.userName}`}>
                          <span> @{twit.user.userName} </span>
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

export default Home;
