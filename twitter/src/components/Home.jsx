import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Navigation from "./partials/Navigation";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import LikeButton from "./partials/LikeButton";

function Home() {
  const state = useSelector((state) => state.twitterReducer);
  const tweets = useSelector((state) => state.tweets);
  const [text, setText] = useState();
  const history = useHistory();
  const dispatch = useDispatch();

  function handleTweetPost() {
    axios
      .post(
        `http://localhost:8000/tweets`,
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
        dispatch();

        history.push("/");
      });
  }

  useEffect(() => {
    axios
      .get(`http://localhost:8000/tweets`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${state.twitterReducer.token}`,
        },
      })
      .then((res) => {
        dispatch();
      });
  }, []);

  return (
    <>
      <Navigation />
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            {tweets &&
              tweets
                .map((tweet) => {
                  return (
                    <div class="tweet-container">
                      <div class="row">
                        <div class="col-md-2">
                          <Link to={`/users/${tweet.user.userName}`}>
                            <img class="rounded-circle tweetAvatar" src="" />
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
                      <LikeButton
                        tweet={tweet}
                        userLiking={state.twitterReducer.user}
                      />
                    </div>
                  );
                })
                .reverse()}
          </div>

          <div className="col-md-6">
            <form action="/tweets" method="POST">
              <div class="form-group">
                <label for="twitContent">Escribe tu tweet aquí</label>
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
        </div>
      </div>
    </>
  );
}

export default Home;
