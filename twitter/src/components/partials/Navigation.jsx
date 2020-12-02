import React from "react";
import { useSelector } from "react-redux";
import persistor from "../../index";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

const Navigation = () => {
  const user = useSelector((state) => state.user);

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="/">Mini-Twitter</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link class="nav-link" to="/">
              Home
            </Link>
            <Link class="nav-link" to={`/users/${user.userName}`}>
              Perfil
            </Link>
            <Link to={"/edit"}>Editar Usuario</Link>
          </Nav>
        </Navbar.Collapse>
        <Nav>
          {user.token ? (
            <>
              <div class="my-2 my-lg-0 text-light">Hola @{user.userName}</div>
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
        </Nav>
      </Navbar>
    </>
  );
};

export default Navigation;
