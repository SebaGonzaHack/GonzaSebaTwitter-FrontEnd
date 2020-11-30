import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { saveToken } from "../redux/actions/user";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  function handleLogin(username, password) {
    axios
      .post("http://localhost:8000/login", {
        username: username,
        password: password,
      })
      .then((res) => {
        dispatch(saveToken(res.data.token, res.data.user));
        history.push("/");
      })
      .catch((error) => {});
  }

  return (
    <div className="container">
      <div className="login-box mt-5 p-3">
        <h2 className="pb-2">¡Bienvenido!</h2>
        <h4 className="pb-2">Inicia sesión y comienza tu aventura</h4>

        <form>
          <div className="form-group">
            <label for="username">Nombre de Usuario</label>
            <input
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              className="form-control"
              id="username"
              name="username"
              placeholder="Ingresa tu Nombre de Usuario..."
            />
          </div>
          <div className="form-group">
            <label for="password">Contraseña</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="Ingresa tu Nombre de Password..."
            />
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              handleLogin(username, password);
            }}
          >
            Iniciar Sesión
          </button>
          <Link to="/register" className="btn btn-primary">
            Registrarse
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
