import React from "react";
import { useSelector, useDispatch } from "react-redux";
import actions from "../redux/actions/actions";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <>
      <div class="row">
        <div class="col-md-2">
          <img
            class="rounded-circle profileAvatar"
            src="{loggedUser.userPhoto}"
            alt="{loggedUser.userName}"
          />
        </div>

        <div class="col-md-10">
          <p>loggedUser.bio</p>
        </div>

        <hr />

        <span>Seguidores: loggedUser.userFollowers.length | </span>
        <span>Siguiendo: loggedUser.userFollowing.length</span>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div class="tweet-container">
            <div class="row">
              <div class="col-md-2">
                <Link to={`http://localhost:3000/profile/$twit.user.userName`}>
                  <img
                    class="rounded-circle tweetAvatar"
                    src="{twit.user.userPhoto}"
                    alt="{twit.user.userName}"
                  />
                </Link>
              </div>

              <div class="col-md-10">
                <strong>twit.user.firstName twit.user.lastName</strong>
                <Link to={`http://localhost:3000/profile/$twit.user.userName`}>
                  <span>@twit.user.userName </span>
                </Link>

                <p>twit.text</p>
              </div>
            </div>

            <hr />
            <span>twit.createdAt | </span>

            <span>
              <Link
                to="http://localhost:3000/tweet/like/${twit._id}"
                method="POST"
              >
                <i class="far fa-heart"></i>
              </Link>
              twit.likes.length
            </span>
          </div>
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
    </>
  );
}

export default Profile;
