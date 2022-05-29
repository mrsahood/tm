import React from 'react'
import { Button,Col, Navbar,Dropdown,DropdownButton,Row,Alert,ProgressBar } from 'react-bootstrap';
import './ProTask.css'

function ProTask() {
  return (
    <div className='col-10 fluid' style={{float:"left"}}>
        <div className='d-flex justify-content-start intro-pro' >
          <h2>Project Tasks</h2>
          <button style={{marginLeft:"40px"}} className="twin-button-pro" ><i class="fa fa-bars-progress ml-2"></i></button>
          <button style={{marginRight:"40px"}} className="twin-button-pro" ><i class="fa fa-barcode"></i></button>
          <DropdownButton id="dropdown-item-button " className='intro-drop' variant='white'
           title="Newest First">
                            <Dropdown.ItemText>Newest First</Dropdown.ItemText>
                            <Dropdown.Item as="button">Action</Dropdown.Item>
                            <Dropdown.Item as="button">Another action</Dropdown.Item>
                            <Dropdown.Item as="button">Something else</Dropdown.Item>
                        </DropdownButton>
        </div>
        <div>
          <h5 id='name-pro' >Project Name</h5>
        </div> <br /> <br />
        <div>
          <Row className='project-task-3bar' >
            <Col>
              <Alert ><i class="fa-solid fa-circle-plus"></i> &nbsp; Create Task</Alert>
              <div className="card-pro-red d-flex justify-content-between  ">
                <div className='left-project-1' >
                <h5 id='task-title'>Task Title</h5> <br /> <br />
                <h6 id='due-date' >Due Date</h6>
                </div>
                <div  >
                  <p id='p2-project' >unassigned</p>
                  <p className='right-project-1' >26 March 2022</p>
                </div>
              </div>
            </Col>
            <Col>
            <div className="card-pro-green d-flex justify-content-between ">
                <div className='left-project-1' >
                <h5 id='task-title' >Task Title</h5> <br /> <br />
                <h6 id='due-date' >Due Date</h6>
                </div>
                <div  >
                <div className='d-flex justify-content-start mt-3' >
                  <div className='active-profile ' style={{ marginLeft: "10px", marginTop: "2px" }} >A</div> 
                  <p style={{marginTop:"5px"}} >Anusree</p>
                  </div>
                  <p className='right-project-1' style={{color:"red"}} >26 March 2022</p>
                </div>
                
              </div>
              <ProgressBar variant="primary"  now={75}  />
            </Col>
            <Col>
            <div className="card-pro-yellow d-flex justify-content-between ">
                <div className='left-project-1' >
                <h5 id='task-title' >Task Title</h5> <br /> <br />
                <h6 id='due-date' >Due Date</h6>
                </div>
                <div  >
                   <div className='d-flex justify-content-start mt-3' >
                  <div className='active-profile ' style={{ marginLeft: "10px", marginTop: "2px" }} >A</div> 
                  <p style={{marginTop:"5px"}} >Anusree</p>
                  </div>
                  <p className='right-project-1' style={{color:"black"}} >26 March 2022</p>
                </div>
              </div>
              <ProgressBar variant="success"  now={100}  />
            </Col>
          </Row>
        </div>
    </div>
  )
}

export default ProTask