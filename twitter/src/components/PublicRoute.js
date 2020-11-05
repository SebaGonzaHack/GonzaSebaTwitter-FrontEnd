import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isLogin } from "../utils";
import { useSelector } from "react-redux";

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  const state = useSelector((state) => state.twitterReducer);

  return (
    // restricted = false meaning public route
    // restricted = true meaning restricted route
    <Route
      {...rest}
      render={(props) =>
        isLogin(state.token) && restricted ? (
          <Redirect to="/" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;
