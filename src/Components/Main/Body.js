import React, { useState } from 'react'
import { Button, Col, Row, Container, Alert, ProgressBar } from 'react-bootstrap';
import SideBar from '../SideBar/SideBar';
import { FaBook, FaPollH } from "react-icons/fa";

import './Body.css'



function Body() {
  const [col, setColor] = useState(true)

  return (

    <Container fluid>
  <Row>
    <Col md={2} >
        <div className='' >
        <h6 style={ col ? {color:"black" } : {color:"blue" } } onClick={() => setColor(false) } ><FaBook />&nbsp;Summary</h6> 
        <i className="fa-solid fa-plus" style={{float:"right",marginRight:"20px"}} ></i> <br /> <br /> 
        <h6 style={ col ? {color:"blue" } : {color:"black" } } onClick={() => setColor(true)} ><FaPollH />&nbsp; Projects</h6>
        <i className="fa fa-notebook"></i>
        </div>
    </Col>
    <Col>
    {/* <Row>
    <Col className='row2' >
      <div>
      <ProgressBar>
        <ProgressBar variant="success" now={30} key={1} />
        <ProgressBar variant="primary" now={40} key={2} />
      </ProgressBar>

      <Alert variant='secondary' >To Do</Alert>
      <Alert variant='success' >In Progress</Alert>
      <Alert variant='primary' >Completed</Alert>
      </div>
    </Col>
    <Col>
    <Col className='row2'>
      <ProgressBar>
        <ProgressBar variant="danger" now={30} key={1} />
        <ProgressBar variant="success" now={35} key={2} />
        <ProgressBar variant="warning" now={35} key={3} />
      </ProgressBar>

      <Alert variant='danger' >To Do</Alert>
      <Alert variant='success' >In Progress</Alert>
      <Alert variant='warning' >Completed</Alert>

    </Col>
    </Col>
    </Row> */}
    </Col>
  </Row>
  
</Container>



  )
}

export default Body


