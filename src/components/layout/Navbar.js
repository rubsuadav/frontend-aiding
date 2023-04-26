import { Link } from "react-router-dom";
import swal from "sweetalert";
import axios from "axios";
import { useState } from "react";

// React Bootstrap imports
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";

// Local imports
import { backendUrl } from "../../config";
import { useAuthContext } from "../routes/authContext";
import React from "react";

const NavigationBar = ({
  navLinksPublic,
  navLinksAdmin,
  navLinksCaptainSupervisor,
  logo,
}) => {
  const { logout, isAuthenticated, isCaptain, isSupervisor, isAdmin } =
    useAuthContext();

  /** Logout logic */
  const logoutApi = axios.create({
    baseURL: String(backendUrl + "base/logout/"),
    timeout: 5000,
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  });

  function Logout() {
    logoutApi.post("", {
      refresh_token: localStorage.getItem("refresh_token"),
    });
    logout();
    swal("Sesión cerrada", "Hasta pronto!", "success");

    return null;
  }

  const [activeLink, setActiveLink] = useState("");

  const handleClick = (event) => {
    setActiveLink(event.target.pathname);
  };

  const role = localStorage.getItem("role");
  console.log(isAuthenticated && (role === "capitán" || role === "supervisor"));

  return (
    <Navbar className="navbar" expand="sm">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            width="180"
            height="80"
            className="d-inline-block align-top"
            alt="Logo"
            loading="lazy"
            key={new Date().getTime()}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="me-auto">
            {/** Public links */}
            {isAuthenticated &&
              role === "admin" &&
              navLinksPublic.map((link) => (
                <Nav.Link
                  key={link.path}
                  as={Link}
                  to={link.path}
                  className={link.path === activeLink ? "active" : ""}
                  onClick={handleClick}
                  id="navlink"
                >
                  <strong>{link.title}</strong>
                </Nav.Link>
              ))}

            {/** Dropdown menu for admin */}
            {isAuthenticated && role === "admin" && (
              <NavDropdown
                title="Administración"
                id="basic-nav-dropdown"
                style={{ fontWeight: "bold" }}
              >
                {navLinksAdmin.map((link) => (
                  <NavDropdown.Item key={link.path} as={Link} to={link.path}>
                    {link.title}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
            )}
            {/** Dropdown menu for captain and supervisor*/}
            {/* {isAuthenticated &&
              (role === "capitán" ||
                role === "supervisor" ||
                role === "admin") && (
                <NavDropdown
                  title="Menú para capitanes/supervisores"
                  id="basic-nav-dropdown"
                  style={{ fontWeight: "bold" }}
                >
                  {navLinksCaptainSupervisor.map((link) => (
                    <NavDropdown.Item key={link.path} as={Link} to={link.path}>
                      {link.title}
                    </NavDropdown.Item>
                  ))}
                </NavDropdown>
              )}*/}

            {/** Login and logout buttons */}
            {isAuthenticated && (
              <Button variant="light" onClick={Logout} className="logout">
                Cerrar sesión
              </Button>
            )}
            {!isAuthenticated && (
              <>
                <Nav.Link
                  key="base/login"
                  as={Link}
                  to="base/login"
                  className="login"
                >
                  <strong>Iniciar sesión</strong>
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
