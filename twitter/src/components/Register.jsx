import React, { useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import createToken from "../redux/actions/actions";
import { useHistory, Link } from "react-router-dom";
import Nav from "./partials/Nav";
import RegisterForm from "./partials/RegisterForm";

const Register = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <>
      <Nav />
      <RegisterForm />
    </>
  );
};

export default Register;
