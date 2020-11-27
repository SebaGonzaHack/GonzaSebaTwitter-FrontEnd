import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <>
      <div className="footer text-left">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h4 className="mt-5">MiniTwitter</h4>
              <p>Un producto hecho por estudiantes.</p>
              <p>Full Stack Developers Junior (por ahora).</p>
            </div>

            <div className="col-md-3">
              <h4 className="mt-5">Sobre Nosotros</h4>

              <p>
                <Link
                  to={{
                    pathname: "https://www.linkedin.com/in/gonzalomolina1990",
                  }}
                  target="_blank"
                >
                  Gonzalo Molina
                </Link>
              </p>
              <p>
                <Link
                  to={{
                    pathname: "https://www.linkedin.com/in/sebastian-cesar/",
                  }}
                  target="_blank"
                >
                  Sebastián César
                </Link>
              </p>
            </div>

            <div className="col-md-3">
              <h4 className="mt-5">Te invitamos a loguearte</h4>
              <p>Horas de diversión te esperan en nuestra red social!</p>
            </div>
            <div className="col-md-3">
              <h4 className="mt-5">
                Mini Twitter<small>©</small>
              </h4>
              <p>Todos los derechos reservados.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
