import React, { useState } from "react";
import useAxios from "../hooks/useAxios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="container">
      <div className="login-box mt-5 p-3">
        <h2 className="pb-2">¡Bienvenido!</h2>

        <h4 className="pb-2">Inicia sesión y comienza tu aventura</h4>

        <form action="/login" method="POST">
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
          <button type="button" className="btn btn-primary">
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
