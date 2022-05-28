import React, { useState } from 'react'
import { Button, Col, Row, Container, ProgressBar, Alert } from 'react-bootstrap';
import "./PageContainer.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaBook, FaPollH } from "react-icons/fa";



function PageContainer() {

  return (
    <div id='cover' className='bg-light' style={{ float: "left" }} >
      <Container bg="light" className='col-14'>
        <div ><h4 className='heading'>Project</h4><h4 className='heading2'  >Summary</h4></div>
        <Row bg="light" >
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
        </Row>
      </Container>

      <section>
        <div className="body">
          <div className="upcoming col-8">
            <h5>Upcoming Tasks</h5> <span>High</span>
            <div className="task">
              <div className="task-date"></div>
              <div className="task-details"></div>
            </div>
          </div>
          <div className="recent col-8">
          </div>
        </div>
      </section>


    </div>
  )
}

export default PageContainer