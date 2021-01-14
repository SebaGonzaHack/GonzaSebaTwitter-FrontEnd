import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Navigation from "./partials/Navigation";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import Tweet from "./partials/Tweet";
import { showTweets, addTweet } from "../redux/actions/actionsTweet";

function Home() {
  const user = useSelector((state) => state.user);
  const tweets = useSelector((state) => state.tweets);
  const [text, setText] = useState();
  const history = useHistory();
  const dispatch = useDispatch();

  function handleTweetPost(text, user) {
    axios
      .post(
        `http://localhost:8000/tweets`,
        {
          text: text,
          user: user._id,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
        }
      )
      .then((res) => {
        dispatch(addTweet(res.data, user));

        history.push("/");
      });
  }

  useEffect(() => {
    axios
      .get(`http://localhost:8000/tweets`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((res) => {
        dispatch(showTweets(res.data));
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
                  return <Tweet tweet={tweet} />;
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
                  handleTweetPost(text, user);
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
