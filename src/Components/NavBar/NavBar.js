import React, { useState } from 'react'
import './NavBar.css'
import { FaBoxOpen } from "react-icons/fa";
import { Button,Col, Navbar,Container,NavDropdown,Nav } from 'react-bootstrap';

function NavBar( props ) {
    const [pop, setPop] = useState(false)

    const managePOp = () => {
        console.log(pop);
       setPop(!pop)
    }
  return (
    <div  >
        <Navbar bg="white"   expand="lg"  className="ms-auto  navname" >
  <Container fluid>
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
        <i className="fa-solid fa-bars icon" onClick={managePOp}  ></i>
        <Nav.Link href="#home">Savadfarooque</Nav.Link> <i className="fa-regular fa-user icon "></i><i className="fa fa-caret-down icon"></i>
      </Nav>
    </Navbar.Collapse>
  </Container>
{ pop && <div id='pop'  >
            <FaBoxOpen className='open-box' />
            <FaBoxOpen className='open-box' />
         </div>}

</Navbar>
    </div>
  )
}

export default NavBar