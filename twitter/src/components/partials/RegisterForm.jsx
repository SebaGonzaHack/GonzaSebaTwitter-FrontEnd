import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createToken } from "../../redux/actions/actions";

const RegisterForm = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userphoto, setUserphoto] = useState("");
  const [bio, setBio] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  function handleLogin(username, password) {
    axios
      .post("http://localhost:8000/login", {
        username: username,
        password: password,
      })
      .then((response) => {
        dispatch(createToken(response.data, username));
        history.push("/");
      })
      .catch((error) => {});
  }

  function handleRegister(newUser) {
    axios
      .post("http://localhost:8000/register", {
        firstname: newUser.firstname,
        lastname: newUser.lastname,
        email: newUser.email,
        username: newUser.username,
        password: newUser.password,
        userphoto: newUser.userphoto,
        bio: newUser.bio,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div class="container mt-4">
      <h1>Bienvenido a Mini-Twitter!</h1>
      <div class="jumbotron mt-4">
        <h3>Ingresa tus datos para registrarte</h3>

        <form enctype="multipart/form-data" action="/register" method="POST">
          <div class="form-group mb-3">
            <label for="firstname">Nombre</label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              class="form-control"
              placeholder="Introducir Nombre..."
              onChange={(e) => setFirstname(e.target.value)}
            />
          </div>

          <div class="form-group mb-3">
            <label for="lastname">Apellido</label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              class="form-control"
              placeholder="Introducir Apellido..."
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>

          <div class="form-group">
            <label for="email">Correo electrónico</label>
            <input
              type="email"
              class="form-control"
              name="email"
              id="email"
              placeholder="Ejemplo: tucasilla@correo.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div class="form-group">
            <label for="password">Password</label>
            <input
              name="password"
              type="password"
              class="form-control"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div class="form-group mb-3">
            <label for="username">Nombre de Usuario</label>
            <input
              type="text"
              id="username"
              name="username"
              class="form-control"
              placeholder="Introducir tu nombre de usuario..."
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div class="form-group">
            <label for="userphoto">Foto de Usuario</label>
            <input
              type="file"
              id="userphoto"
              name="userphoto"
              class="form-control"
              placeholder="Inserte Apellido..."
              onChange={(e) => setUserphoto(e.target.value)}
            />
          </div>

          <div class="form-group mb-3">
            <label class="d-block" for="bio">
              Descripción
            </label>

            <textarea
              type="text"
              id="bio"
              name="bio"
              class="form-control d-block"
              placeholder="Sobre Mí..."
              cols="30"
              rows="10"
              onChange={(e) => setBio(e.target.value)}
            ></textarea>
          </div>

          <a
            href="/login"
            type="button"
            class="btn btn-primary"
            onClick={() => {
              handleRegister({
                firstname,
                lastname,
                email,
                username,
                password,
                userphoto,
                bio,
              });
            }}
          >
            Registrarme
          </a>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
