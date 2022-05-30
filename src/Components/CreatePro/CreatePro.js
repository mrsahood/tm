import { Alert, Button, ButtonGroup, DropdownButton, Dropdown, ProgressBar } from 'react-bootstrap'
import React from 'react'
import './CreatePro.css'

function CreatePro(props) {
    const changeState = () => {
        console.log(props.data());
    }
    return (
        <div className='pop_back' >
            <div className='pop' >
                <div className="project-name">
                    <div className="project-desc">
                        <div className="pro-name">
                            <p>Project Name</p> <br />
                            <h6  >Project Name</h6>
                            <div className="horizondal"></div>
                        </div>
                        <div className="pro-summary">
                            <p>Description</p> <br />
                            <input type="text" /> <br /> <br /> <br />
                            <div className="create-project-save-top position-absolute  d-flex justify-content-between" >
                                <div className='p-2 pro-summary-sd' >
                                    <button className='btn btn-primary mt-2' >Save</button>
                                    <span style={{ marginTop: "2vh", marginLeft: "10px" }} >Cancel</span>
                                </div>
                                <div className='ml-auto p-2 ' >
                                    <Alert style={{ marginLeft: "316px" }} variant='secondary' ><i class="fa-solid fa-paperclip"> &nbsp; </i>Attach</Alert>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="project-activ">
                        <p>Activities</p> <br /> <br />
                        <p style={{ marginTop: "-25px" }} >show :</p>
                        <div className="d-flex  pro-3-alert " >
                            <div className='p-2 d-flex justify-content-center ' >
                                <button className='pro2-button' >All</button>
                                <span>   <Alert variant='secondary' >Comment</Alert>  </span>
                                <span>  <Alert variant='secondary' >History</Alert> </span>
                            </div>
                            <div className='mt-3'  >
                                <DropdownButton id="dropdown-item-button" variant='white' title="Newest First">
                                    <Dropdown.ItemText>Newest First</Dropdown.ItemText>
                                    <Dropdown.Item as="button">Action</Dropdown.Item>
                                    <Dropdown.Item as="button">Another action</Dropdown.Item>
                                    <Dropdown.Item as="button">Something else</Dropdown.Item>
                                </DropdownButton>
                            </div>
                        </div>
                        <div className='pro-all  d-flex justify-content-around' >
                            <div className='active-profile' >SF</div>
                            <form action="">
                                <input type="text" />
                            </form>
                        </div>
                        <div className="comment d-flex justify-content-start mt-2 position-relative">
                            <div className='active-profile' style={{ marginLeft: "25px" }} >SF</div> <span style={{ marginLeft: "10px", fontWeight: "500" }} >Savadfarooque</span> <span className='pro-time' >12 minutes ago</span>
                            <div className='position-absolute mt-4 ' style={{ marginLeft: "15px" }} ><p class="ltbrac">&lt;  </p><p class="eleme">comment</p><p class="gtbrac">&gt;</p> <br /></div> <br /> <br />
                            <span className='mt-5' style={{color:"blue",marginLeft:"-200px"}} >edite</span> <span className='mt-5' style={{color:"red"}} > &nbsp; delete</span>
                        </div>

                        <div className='pro-all mt-2 d-flex justify-content-around' >

                        </div>
                        <div className="comment d-flex justify-content-start mt-4 position-relative">
                            <div className='active-profile' style={{ marginLeft: "25px" }} >SF</div> <span style={{ marginLeft: "10px", fontWeight: "500" }} >Savadfarooque</span> <span className='pro-time' >22 minutes ago</span>
                            <div className='position-absolute mt-4 ' style={{ marginLeft: "15px" }} ><p class="ltbrac">&lt;  </p><p class="eleme">comment</p><p class="gtbrac">&gt;</p> <br /></div>
                            <span className='mt-5' style={{color:"blue",marginLeft:"-200px"}} >edite</span> <span className='mt-5' style={{color:"red"}} > &nbsp; delete</span>

                        </div>

                        <div className='pro-all mt-2 d-flex justify-content-around' >

                        </div>
                        <div className="comment d-flex justify-content-start mt-4 position-relative">
                            <div className='active-profile' style={{ marginLeft: "25px" }} >SF</div> <span style={{ marginLeft: "10px", fontWeight: "500" }} >Savadfarooque</span> <span className='pro-time' >41 minutes ago</span>
                            <div className='position-absolute mt-4 ' style={{ marginLeft: "15px" }} ><p class="ltbrac">&lt;  </p><p class="eleme">comment</p><p class="gtbrac">&gt;</p> <br /></div>
                            <span className='mt-5' style={{color:"blue",marginLeft:"-200px"}} >edite</span> <span className='mt-5' style={{color:"red"}} > &nbsp; delete</span>
                            
                        </div>
                    </div>
                </div>
                <div>
                </div>





                <div className="project-progress">
                    <div className="status-inprogress">
                        <span>Status</span> <br /> <i class="fa-solid fa-xmark mr-auto close-button " onClick={changeState}  ></i>
                        <DropdownButton id="dropdown-item-button" variant='primary' title="Newest First">
                            <Dropdown.ItemText>Newest First</Dropdown.ItemText>
                            <Dropdown.Item as="button">Action</Dropdown.Item>
                            <Dropdown.Item as="button">Another action</Dropdown.Item>
                            <Dropdown.Item as="button">Something else</Dropdown.Item>
                        </DropdownButton>
                    </div>
                    <div className="progress-details">
                        <p>Details</p>
                        <div className='pro-det-alert' >
                            <Alert className='d-flex justify-content-between' variant='secondary' > <span>@Assignee </span> <span style={{fontFamily:"italic"}} >unassigned</span> </Alert>
                            <Alert className='d-flex justify-content-between' variant='secondary' > <span>Reporter</span> <span> 
                            <div className='d-flex justify-content-end' >
                            <div className='active-profile' style={{ marginLeft: "25px",marginTop:"7px" }} ></div> <span  >Savadfarooque</span> 
                            </div> </span> </Alert>
                            <Alert className='d-flex justify-content-between' variant='secondary' > <span>Due Date</span> <span>26 March 2022</span> </Alert>
                            <Alert className='d-flex justify-content-between' variant='secondary' > <span>Project </span> <span>ProjecName</span> </Alert>
                            <Alert className='d-flex justify-content-between' variant='secondary' > <span>Proiriry</span> <span>
                            <div className='mb-5'  >
                                <DropdownButton id="dropdown-item-button" variant='danger' title="High Priority">
                                    <Dropdown.ItemText>High Priority</Dropdown.ItemText>
                                    <Dropdown.Item as="button">Action</Dropdown.Item>
                                    <Dropdown.Item as="button">Another action</Dropdown.Item>
                                    <Dropdown.Item as="button">Something else</Dropdown.Item>
                                </DropdownButton>
                            </div>
                                </span> </Alert>
                            
                            <Alert className='d-flex justify-content-between' variant='secondary' style={{height:"57px",paddingTop:"12px"}} > <span className='progresbar-info' >Proggress</span>
                                <span style={{ marginLeft: "240px" }} className='progresbar-info' >30%</span> <br /> <ProgressBar now={30} />
                            </Alert>
                            

                        </div>
                    </div>
                    <Button style={{float:"right",margin:"3px",marginRight:"40px"}} variant='primary' onClick={changeState} >Save</Button>
                </div>
            </div>
        </div>
    )
}

export default CreatePro