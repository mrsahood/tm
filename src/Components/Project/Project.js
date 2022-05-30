import React, { useState } from 'react'
import { Button, Col, Navbar, Card, Dropdown, Row, Container, Alert, ProgressBar } from 'react-bootstrap';
import CreatePro from '../CreatePro/CreatePro';
import ProjectTasks from '../ProjectTasks/ProjectTasks';
import SideBar from '../SideBar/SideBar';
import './Project.css'

function Project() {
    const [container, setContainer] = useState(false)
    const [footer, setFooter] = useState(false)
    const [pop, setpop] = useState(false)
    
    const manageFooter = () => {
        console.log(footer)
        setFooter(!footer)
    }
    if(footer) return <ProjectTasks />
    return (
        <div fluid style={{ float: "left" }} className="col-10">
            <Container fluid>
                <Row >

                    <Col>
                        <button className='btn btn-success mt-4 create-btn' onClick={() => setpop(!pop)} >Create</button>
                        <div class="d-flex justify-content-start">
                            <h3 className='mt-5' >Projects &nbsp; </h3>
                            <Dropdown>
                                <Dropdown.Toggle variant="white" className='mt-5 drop-button border border-dark pro-button' id="dropdown-basic">
                                    Filter:&nbsp; &nbsp; All
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div> <br />


                        <div className="container1 rounded">
                            <div className="pr-info" onClick={() => setContainer(!container)}>
                                <div className='d-flex justify-content-between'>
                                    <p className='p-3' >Project  Name</p>
                                    <div className='ml-auto p-2 '  >
                                        <Alert className='pro-alert' style={{ fontWeight: "500" }} >Admin</Alert>
                                    </div>
                                </div>

                                <div className='d-flex justify-content-between'>
                                    <div className=' p-2 '  >
                                        <Alert className='pro-aler1 border border-danger' variant='danger' style={{ marginTop: "-15px" }}  >High Priority</Alert>
                                    </div>
                                    <div  >
                                        <p className='pr-due' style={{ marginRight: "20px" }} >Due Date</p>
                                        <p style={{ color: "blue", fontSize: "15px", fontWeight: "600", marginTop: "-20px", marginRight: "20px"}} >
                                            26 March 2022</p>
                                    </div>
                                </div>
                                <div className="pr-info "  >
                                    <div className='d-flex justify-content-between'>
                                        <p className='p-2' style={{ fontWeight: "700", fontSize: "20px" }}>Status</p>
                                        <div className='ml-auto p-2 '  ><Alert className='proj-alert' >In Progress &nbsp; 
                                        <i class="fa fa-caret-down"></i></Alert></div>
                                    </div>
                                </div>
                            </div>

                            <div className="add-tasak border border-1 border-top" onClick={manageFooter} >
                                <i class="fa fa-circle-plus icon-plus "></i> <span className='add-icon-txt ' >Add Task
                                </span> <br />
                                <div class="d-flex justify-content-between  " style={{ marginLeft: "-30px" }}  >
                                    <Alert variant='secondary' >
                                        <span>To Do</span >
                                        <span style={{ float: "right" }} >6</span> </Alert>
                                    <Alert variant='primary' > <span>In Progress</span>
                                        <span style={{ float: "right" }} >23</span></Alert>
                                    <Alert variant='success' > <span>Completed</span>
                                        <span style={{ float: "right" }} >43</span></Alert>
                                </div >
                                <p style={{ float: "left", marginLeft: "8px", marginTop: "-15px" }} >Progress</p> 
                                <span style={{ float: "right", color: "grey", marginTop: "-15px" }} >75%</span> <br />
                            </div>
                            <div className='bbar'>
                                <ProgressBar variant="primary" now={75} />
                            </div>
                        </div>


                    </Col>

                </Row>
            </Container>

            {container ? <CreatePro data={setContainer} /> : ""}
            {/* { pop ? <CreatePro /> : "" } */}
             
        </div>
    )
}

export default Project