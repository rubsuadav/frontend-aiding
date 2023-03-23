import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import swal from "sweetalert";
import { backendUrl } from "../../config";
import axios from "axios";
import Cookies from "universal-cookie";

import { useAuthContext } from "../routes/authContext";

const NavigationBar = ({ navLinksPublic, navLinksAdmin, logo }) => {
  const { logout, isAuthenticated } = useAuthContext();
  const cookie = new Cookies();

  function Logout() {
    axios.get(backendUrl + "base/logout/").then((response) => {
      logout();
      cookie.remove("sessionid");
      swal("", "Has cerrado sesión correctamente", "success");
    }).catch((error) => {
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
            {navLinksPublic.map((link) => (
              <Nav.Link key={link.path} as={Link} to={link.path}>
                {link.title}
              </Nav.Link>
            ))}

            {isAuthenticated &&  navLinksAdmin.map((link) => (
              <Nav.Link key={link.path} as={Link} to={link.path}>
                {link.title}
              </Nav.Link>
            ))}
            {isAuthenticated && <Nav.Link onClick={Logout}>Logout</Nav.Link>}
            {!isAuthenticated && <Nav.Link key="base/login" as={Link} to="base/login">
                Login
              </Nav.Link>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
