import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { VscAccount } from "react-icons/vsc";

const BasicExample = ({navLinks, logo}) => {
  
  return (
    <Navbar className='navbar' expand="sm">
      <Container>
        <Navbar.Brand as={Link} to="/Home">
          <img
                src={logo}
                width="130"
                height="60"
                className="d-inline-block align-top"
                alt="Logo"
              />

        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="me-auto">
            {navLinks.map((link,index) => (
              <Nav.Link as={Link} to={link}>{link}</Nav.Link>
            ))}
              {/* <Nav.Link as={Link} to="/Home">Home</Nav.Link>
              <Nav.Link as={Link} to="/Items">Items</Nav.Link> */}
            </Nav>
          < VscAccount />
          <Navbar.Text id="admin">
          Administrador
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;