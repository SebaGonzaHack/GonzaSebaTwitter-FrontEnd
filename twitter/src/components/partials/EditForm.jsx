import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

const EditForm = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [userphoto, setUserphoto] = useState("");
  const [bio, setBio] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  function handleEdit(newUser) {
    axios
      .post("http://localhost:8000/editUser", {
        firstname: newUser.firstname,
        lastname: newUser.lastname,
        email: newUser.email,
        username: newUser.username,
        userphoto: newUser.userphoto,
        bio: newUser.bio,
      })
      .then((response) => {})
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div class="container mt-4">
      <div class="jumbotron mt-4">
        <h3>Ingresa tus nuevos datos para actualizar</h3>

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
              handleEdit({
                firstname,
                lastname,
                email,
                username,
                userphoto,
                bio,
              });
            }}
          >
            Actualizar datos
          </a>
        </form>
      </div>
    </div>
  );
};

export default EditForm;
