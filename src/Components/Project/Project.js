import React, { useState } from 'react'
import { Button, Col, Navbar, Card, Dropdown, Row, Container, Alert,ProgressBar } from 'react-bootstrap';
import CreatePro from '../CreatePro/CreatePro';
import SideBar from '../SideBar/SideBar';
import './Project.css'

function Project() {
    const [container, setContainer] = useState(false)
    const [footer, setFooter] = useState(false)

    return (
        <div fluid style={{ float: "left" }} className="col-10">
            <Container fluid>
                <Row >

                    <Col>
                    <button className='btn btn-success mt-4 create-btn' >Create</button>
                        <div class="d-flex justify-content-start">
                            <h3 className='mt-5' >Projects &nbsp; </h3>
                            <Dropdown>
                                <Dropdown.Toggle variant="white" className=' mt-5 drop-button border border-dark pro-button' id="dropdown-basic">
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
                                <div className='d-flex'>
                                    <p className='p-3' >Project  Name</p>
                                    <div className='ml-auto p-2 '  ><Alert className='pro-alert'style={{ fontWeight: "500" }} >Admin</Alert></div>
                                </div>

                            <div className='d-flex'>
                                <div className=' p-2 '  ><Alert className='pro-aler1' variant='danger' style={{marginTop: "-15px"}}  >High Priority</Alert></div>
                                <div style={{ marginTop: "-5px" ,marginLeft:"12vh"}} >
                                    <p className='pr-due' >Due Date</p>
                                    <p style={{ color: "blue", marginTop: "-20px", fontWeight: "600" }} >26 March 2022</p>
                                </div>
                            </div>
                            <div className="pr-info" onClick={() => setFooter(!footer)} >
                                <div className='d-flex'>
                                    <p className='p-3' style={{ fontWeight: "500",marginTop:"-15px" }}>Status</p>
                                    <div className='ml-auto p-2 '  ><Alert className='proj-alert' >In Progress &nbsp; <i class="fa fa-caret-down"></i></Alert></div>
                                </div>
                            </div>
                            </div>

                            <div className="add-tasak border border-1 border-top" style={{marginTop:"-15px" }}>
                            <i class="fa fa-circle-plus icon-plus"></i> <span className='add-icon-txt' >Add Task</span> <br />
                            <div class="d-flex justify-content-center pr-2 "  >
                                <Alert variant='secondary'>To&nbsp;Do</Alert>
                                <Alert variant='primary'>Progress</Alert>
                                <Alert variant='success'>Complete</Alert>
                                
                                
                            </div >
                            <div className="bbar">
                            <p style={{float:"left",marginLeft:"8px",marginTop:"-5px",position:"absolute"}} >Progress</p> <span style={{float:"right",color:"grey"}} >75%</span> <br />
                                <ProgressBar variant="primary" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"  now={75}  />
                            </div>
                            </div>
                            
                        </div>
                        
                        <div className="container1 rounded" onClick={() => setContainer(!container)}>
                            <div className="pr-info" onClick={() => setFooter(!footer)}>
                                <div className='d-flex'>
                                    <p className='p-3' >Project  Name</p>
                                    <div className='ml-auto p-2 '  ><Alert className='pro-alert'style={{ fontWeight: "500" }} >Admin</Alert></div>
                                </div>

                            <div className='d-flex'>
                                <div className=' p-2 '  ><Alert className='pro-aler1' variant='danger' style={{marginTop: "-15px"}}  >High Priority</Alert></div>
                                <div style={{ marginTop: "-5px" ,marginLeft:"12vh"}} >
                                    <p className='pr-due' >Due Date</p>
                                    <p style={{ color: "blue", marginTop: "-20px", fontWeight: "600" }} >26 March 2022</p>
                                </div>
                            </div>
                            <div className="pr-info" onClick={() => setFooter(!footer)}>
                                <div className='d-flex'>
                                    <p className='p-3' style={{ fontWeight: "500",marginTop:"-15px" }}>Status</p>
                                    <div className='ml-auto p-2 '  ><Alert className='proj-alert' >In Progress &nbsp; <i class="fa fa-caret-down"></i></Alert></div>
                                </div>
                            </div>
                            </div>

                            <div className="add-tasak border border-1 border-top" style={{marginTop:"-15px" }}>
                            <i class="fa fa-circle-plus icon-plus"></i> <span className='add-icon-txt' >Add Task</span> <br />
                            <div class="d-flex justify-content-center pr-2 "  >
                                <Alert variant='secondary'>To&nbsp;Do</Alert>
                                <Alert variant='primary'>Progress</Alert>
                                <Alert variant='success'>Complete</Alert>
                                
                                
                            </div >
                            <div className="bbar">
                            <p style={{float:"left",marginLeft:"8px",marginTop:"-5px",position:"absolute"}} >Progress</p> <span style={{float:"right",color:"grey"}} >75%</span> <br />
                                <ProgressBar variant="primary" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"  now={75}  />
                            </div>
                            </div>
                            
                        </div>
                        </Col>
                    
                </Row>
            </Container>

          { container ? <CreatePro data={setContainer} /> : "" }
        </div>
    )
}

export default Project