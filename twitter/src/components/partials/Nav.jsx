import React from "react";
import { useSelector } from "react-redux";
import persistor from "../../index";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const state = useSelector((state) => state);

  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand text-primary" href="/">
        Mini-Twitter
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="/">
              Home <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <NavLink
              class="nav-link"
              to={`/users/${state.twitterReducer.username}`}
            >
              Perfil
            </NavLink>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="/edit">
              Editar Usuario
            </a>
          </li>
        </ul>
      </div>
      {state.twitterReducer.token ? (
        <>
          <div class="my-2 my-lg-0 text-light">
            Hola @{state.twitterReducer.username}
          </div>
          <a
            href="/login"
            class="btn btn-warning ml-3"
            onClick={() => {
              persistor.purge();
            }}
          >
            Logout
          </a>{" "}
        </>
      ) : (
        <a class="btn btn-warning" href="/login">
          Login
        </a>
      )}
      ;
    </nav>
  );
};

export default Nav;
