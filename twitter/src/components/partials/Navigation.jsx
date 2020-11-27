import React from "react";
import { useSelector } from "react-redux";
import persistor from "../../index";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavDropdown, MenuItem } from "react-bootstrap";

const Navigation = () => {
  const state = useSelector((state) => state);

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="/">Mini-Twitter</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link class="nav-link" to="/">
              Home
            </Nav.Link>
            <NavLink
              class="nav-link"
              to={`/users/${state.twitterReducer.username}`}
            >
              Perfil
            </NavLink>
            <Nav.Link to={"/edit"}>Editar Usuario</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Nav>
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
        </Nav>
      </Navbar>
    </>
  );
};

export default Navigation;
