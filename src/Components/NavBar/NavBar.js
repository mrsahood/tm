import React from 'react'
import './NavBar.css'
import { MenuApp} from 'react-bootstrap-icons';
import { BsFillBadgeCcFill,IoMdApps } from "react-icons/bs";
import { RiApps2Fill } from 'react-icons/ri';
import { Button,Col, Navbar,Container,NavDropdown,Nav } from 'react-bootstrap';

function NavBar() {
  return (
    <div>
        <Navbar bg="light" expand="lg"  className="ms-auto">
  <Container>
    <Navbar.Brand href="#home" id='tm' >tm.</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav  className="justify-content-end" style={{ width: "100%" }} >
        <NavDropdown title="English" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4" className='ms-auto' >Separated link</NavDropdown.Item>
        </NavDropdown>
        <i class="fa-solid fa-bars icon"></i>
        <Nav.Link href="#home">Savadfarooque</Nav.Link> <i class="fa-regular fa-user icon "></i><i class="fa fa-caret-down icon"></i>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}

export default NavBar