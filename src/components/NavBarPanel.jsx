
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">ReduxToolkit</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">Products</Nav.Link>
          </Nav>
          <Navbar.Collapse className='justify-content-end'>
          <Navbar.Text>
            <Nav.Link as={Link} to="/cart">My Bag 0</Nav.Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
