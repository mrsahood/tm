import React from 'react'
import "./ProjectTasks.css"
import { Button, Col, Navbar, Dropdown, DropdownButton, Row, Alert, ProgressBar, Table } from 'react-bootstrap';


function ProjectTasks() {
    return (
        <div className='col-10 fluid' style={{ float: "left" }}>
            <button className='btn btn-success mt-4 create-btn' >Create</button>
            <div className='d-flex justify-content-start intro-pro' >
                <h2>Project Tasks</h2>
                <button style={{ marginLeft: "40px" }} className="twin-button-pro" ><i class="fa fa-bars-progress ml-2"></i></button>
                <button style={{ marginRight: "40px" }} className="twin-button-pro" ><i class="fa fa-barcode"></i></button>
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

            <div className="project-tasks-2 mx-3 ">
                <Table hover className='project-table' >
   
                    <tbody  >
                        <tr className='bg-white project-table-head' >
                            <td className='col-2' style={{ paddingRight: "80px" }} >Task Title</td>
                            <td>Status</td>
                            <td>@Assignee</td>
                            <td>Due Date</td>
                            <td>Priority</td>
                            <td>Reporter</td>
                            <td>Progress</td>
                        </tr>
                        <tr>
                            <td style={{ paddingRight: "70px" }} >
                                <span class="ltbrac">&lt;  </span>
                                <span class="eleme">Task Title</span>
                                <span class="gtbrac">&gt;</span> <br />
                            </td>
                            <td> <Alert variant='primary'  >In Progress
                                <i class="fa fa-angle-down" style={{ float: "right", marginTop: "7px" }}>
                                </i></Alert></td>
                            <td>
                                <div className="comment d-flex justify-content-start mt-2 position-relative">
                                    <div className='active-profile' style={{ marginLeft: "25px" }} >A</div>
                                    <span style={{ marginLeft: "10px", fontWeight: "500" }} >Anusree</span>
                                </div>
                            </td>
                            <td style={{ color: "red" }} >09 March 2022</td>
                            <td> <Alert variant='success' style={{ width: "105px" }}  >Medium
                                <i class="fa fa-angle-down" style={{ float: "right", marginTop: "7px" }}>
                                </i></Alert></td>

                            <td>
                                <div className="comment d-flex justify-content-start mt-2 position-relative">
                                    <div className='active-profile' style={{ marginLeft: "25px" }} >SF</div>
                                    <span style={{ marginLeft: "10px", fontWeight: "500" }} >Savadfarooque</span>
                                </div>
                            </td>
                            <td>
                                <div className="d-flex flex-column project-task-progress" >
                                    <span>80%</span> <br />
                                    <ProgressBar now={80} variant='warning' />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ paddingRight: "70px" }} >
                                <span class="ltbrac">&lt;  </span>
                                <span class="eleme">Task Title</span>
                                <span class="gtbrac">&gt;</span> <br />
                            </td>
                            <td > <Alert variant='secondary'  >To Do <i class="fa fa-angle-down" style={{ float: "right" }}> </i></Alert></td>
                            <td style={{ fontFamily: "italic" }} >unassigned</td>
                            <td style={{ color: "blue" }} >28 March 2022</td>
                            <td  > <Alert variant='danger' style={{ width: "105px" }}  >High
                                <i class="fa fa-angle-down" style={{ float: "right", marginTop: "7px" }}>
                                </i></Alert></td>
                            <td>
                                <div className="comment d-flex justify-content-start mt-2 position-relative">
                                    <div className='active-profile' style={{ marginLeft: "25px" }} >SF</div>
                                    <span style={{ marginLeft: "10px", fontWeight: "500" }} >Savadfarooque</span>
                                </div>
                            </td>
                            <td>
                                <div className="d-flex flex-column project-task-progress" >
                                    <span>0%</span> <br />
                                    <ProgressBar now={0} variant='secondary' />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default ProjectTasks