import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { VscAccount } from "react-icons/vsc";
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavigationBar = ({navLinks, logo}) => {
  
  return (
    <Navbar className='navbar' expand="sm">
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
            {navLinks.map((link) => (
              <Nav.Link key={link.path} as={Link} to={link.path}>{link.title}</Nav.Link>
            ))}
              <NavDropdown title="Eventos" id="nav-dropdown">
                <NavDropdown.Item>{<Nav.Link as={Link} to="/events/programed">Programados</Nav.Link>}</NavDropdown.Item>
                <NavDropdown.Item>{<Nav.Link as={Link} to="/events/started">Empezados</Nav.Link>}</NavDropdown.Item>
              </NavDropdown>
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

export default NavigationBar;