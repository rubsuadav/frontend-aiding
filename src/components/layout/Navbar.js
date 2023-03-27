import { Link } from "react-router-dom";
import swal from "sweetalert";
import axios from "axios";

// React Bootstrap imports
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";

// Local imports
import { backendUrl } from "../../config";
import { useAuthContext } from "../routes/authContext";

const NavigationBar = ({ navLinksPublic, navLinksAdmin, logo }) => {
  const { logout, isAuthenticated } = useAuthContext();

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
    logoutApi
      .post("", { refresh_token: localStorage.getItem("refresh_token") })
      .then((response) => {
        logout();
        swal("", "Has cerrado sesión correctamente", "success");
      })
      .catch((error) => {
        console.log(error);
        swal("", "Ha ocurrido un error", "error");
      });

    return null;
  }

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
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="me-auto">
            {/** Public links */}
            {navLinksPublic.map((link) => (
              <Nav.Link key={link.path} as={Link} to={link.path}>
                {link.title}
              </Nav.Link>
            ))}

            {/** Dropdown menu for admin */}
            {isAuthenticated && (
              <NavDropdown title="Administración" id="basic-nav-dropdown">
                {navLinksAdmin.map((link) => (
                  <NavDropdown.Item key={link.path} as={Link} to={link.path}>
                    {link.title}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
        {/** Login and logout buttons */}
        {isAuthenticated && (
          <Button variant="light" onClick={Logout}>
            Cerrar sessión
          </Button>
        )}
        {!isAuthenticated && (
          <Nav.Link key="base/login" as={Link} to="base/login">
            Iniciar sesión
          </Nav.Link>
        )}
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
