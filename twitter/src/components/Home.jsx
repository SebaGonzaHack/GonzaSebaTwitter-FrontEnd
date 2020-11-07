import Axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Nav from "./partials/Nav";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import LikeButton from "./partials/LikeButton";

function Home() {
  const state = useSelector((state) => state);

  const [tweets, setTweets] = useState();
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
        setTweets(res.data);
      });
  }, []);

  return (
    <>
      <Nav />
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            {tweets &&
              tweets
                .map((twit) => {
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
                      <LikeButton
                        twit={twit}
                        userLiking={state.twitterReducer.user}
                      />
                    </div>
                  );
                })
                .reverse()}
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
