import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ImagenLogo from "../../assets/logo.png";

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <img src = {ImagenLogo} alt='logo'></img>
        <Navbar.Brand href="#index">Inicio</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#remeras">Remeras</Nav.Link>
            <Nav.Link href="#buzos">Buzos</Nav.Link>
            <Nav.Link href="#camperas">Camperas</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link eventKey={2} href="#contacto">
              Contacto
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;