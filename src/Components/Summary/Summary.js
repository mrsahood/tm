import React, { useContext, useState } from 'react'
import { Button,Col, Row,Container,ProgressBar,Alert} from 'react-bootstrap';
import SideBar from '../SideBar/SideBar';
import { FaBook,FaPollH } from "react-icons/fa";

import './Summary.css'
function Summary() {

  const [col, setColor] = useState(true)

  return (
    <Container fluid style={{float:"left"}} className="col-10" id='#home'>
      <Row bg="light"  >
        
        <Col  >
        <div><h4>Summary</h4></div>
        <div  className='row2 ' >
      <ProgressBar>
        <ProgressBar variant="success" now={30} key={1} />
        <ProgressBar variant="primary" now={40} key={2} />
      </ProgressBar>

      <Alert variant='secondary' > <span>To Do</span > 
      <span style={{float:"right"}} >6</span> </Alert>
      <Alert variant='primary' > <span>In Progress</span> 
      <span style={{float:"right"}} >23</span></Alert>
      <Alert variant='success' > <span>Completed</span> 
      <span style={{float:"right"}} >43</span></Alert>
      </div>

      <div className="scroll-body"  >
          <div className="upcoming ">
            <h5 className='up-text' >Upcoming Tasks</h5> <span  className='up-right' >High</span> <br /> <br />
            <div className="tasks">
              <span className="task-date">23</span>
              <span className="task-month">March</span>
              <span className="task-year">2022</span>
              <div className='vertical'></div>
              <div className='horizondal'></div>
              <div className="tag-div">
              <span class="ltbrac" style={{float:"left"}}>&lt;  </span>
              <span class="eleme" style={{float:"left"}}>Task Name</span>
              <span class="gtbrac" style={{float:"left"}}>&gt;</span> <br />
              <span class="ltbrac" style={{fontSize:"12px",color:"grey"}} >&lt;</span>
              <span class="eleme" style={{fontSize:"12px",color:"grey"}} >Project Name</span>
              <span class="gtbrac" style={{fontSize:"12px",color:"grey"}} >&gt;</span>
              <Alert variant='danger' >High</Alert>

              </div>
            </div>
          </div>

          <div className="upcoming ">
            <div className="tasks">
              <span className="task-date">24</span>
              <span className="task-month">March</span>
              <span className="task-year">2022</span>
              <div className='vertical'></div>
              <div className='horizondal'></div>
              <div className="tag-div">
              <span class="ltbrac" style={{float:"left"}} >&lt;  </span>
              <span class="eleme" style={{float:"left"}}>Task Name</span>
              <span class="gtbrac" style={{float:"left"}} >&gt;</span> <br />
              <span class="ltbrac" style={{fontSize:"12px",color:"grey"}} >&lt;</span>
              <span class="eleme" style={{fontSize:"12px",color:"grey"}} >Project Name</span>
              <span class="gtbrac" style={{fontSize:"12px",color:"grey"}} >&gt;</span>
              <Alert variant='danger' >High</Alert>
              </div>
            </div>
          </div>

            <div>
        <div className="upcoming ">
            <div className="tasks">
              <span className="task-date">25</span>
              <span className="task-month">March</span>
              <span className="task-year">2022</span>
              <div className='vertical'></div>
              <div className='horizondal'></div>
              <div className="tag-div">
              <span class="ltbrac" style={{float:"left"}}>&lt;  </span>
              <span class="eleme" style={{float:"left"}}>Task Name</span>
              <span class="gtbrac" style={{float:"left"}}>&gt;</span> <br />
              <span class="ltbrac" style={{fontSize:"12px",color:"grey"}} >&lt;</span>
              <span class="eleme" style={{fontSize:"12px",color:"grey"}} >Project Name</span>
              <span class="gtbrac" style={{fontSize:"12px",color:"grey"}} >&gt;</span>
              <Alert variant='danger' >High</Alert>
            </div>
          </div>
        </div>
        </div>
        

        <div className="upcoming ">
            <div className="tasks">
              <span className="task-date">26</span>
              <span className="task-month">March</span>
              <span className="task-year">2022</span>
              <div className='vertical'></div>
              <div className='horizondal'></div>
              <div className="tag-div">
              <span class="ltbrac" style={{float:"left"}}>&lt;  </span>
              <span class="eleme" style={{float:"left"}}>Task Name</span>
              <span class="gtbrac" style={{float:"left"}}>&gt;</span> <br />
              <span class="ltbrac" style={{fontSize:"12px",color:"grey"}} >&lt;</span>
              <span class="eleme" style={{fontSize:"12px",color:"grey"}} >Project Name</span>
              <span class="gtbrac" style={{fontSize:"12px",color:"grey"}} >&gt;</span>
              <Alert variant='danger' >High</Alert>
            </div>
          </div>
        </div>

        <div className="upcoming ">
            <div className="tasks">
              <span className="task-date">27</span>
              <span className="task-month">March</span>
              <span className="task-year">2022</span>
              <div className='vertical'></div>
              <div className='horizondal'></div>
              <div className="tag-div">
              <span class="ltbrac" style={{float:"left"}} >&lt;  </span>
              <span class="eleme" style={{float:"left"}} >Task Name</span>
              <span class="gtbrac" style={{float:"left"}} >&gt;</span> <br />
              <span class="ltbrac" style={{fontSize:"12px",color:"grey"}} >&lt;</span>
              <span class="eleme" style={{fontSize:"12px",color:"grey"}} >Project Name</span>
              <span class="gtbrac" style={{fontSize:"12px",color:"grey"}} >&gt;</span>
              <Alert variant='danger' >High</Alert>
            </div>
          </div>
        </div>
        </div>


        

      </Col>
        <Col  >
        <div><h4 style={{color:"grey"}} >Priority</h4></div>
        <div className='row2 ' >
        <ProgressBar>
        <ProgressBar variant="danger" now={30} key={1} />
        <ProgressBar variant="success" now={35} key={2} />
        <ProgressBar variant="warning" now={35} key={3} />
      </ProgressBar>

      <Alert variant='warning' > <span>Low Priority</span > 
      <span style={{float:"right"}} >6</span> </Alert>
      <Alert variant='success' > <span>Medium Priority</span> 
      <span style={{float:"right"}} >23</span></Alert>
      <Alert variant='danger' > <span>High Priority</span> 
      <span style={{float:"right"}} >43</span></Alert>
      </div>

      <div className="scroll-body"  >
          <div className="upcoming ">
            <h5 className='up-text' >Recent Activities</h5> <span  className='up-right' >High</span> <br /> <br />
            <div className="tasks1"> 
              <span style={{fontWeight:"700",fontSize:"14px",marginLeft:"-17px"}} >Savadfarooque</span>
              <span style={{color:"grey",fontSize:"14px"}} >Changes</span>
              <span style={{color:"blue",fontSize:"14px"}} >Status</span>
              <span style={{color:"grey",fontSize:"14px"}} >to</span>
              <span style={{color:"green",fontSize:"14px"}}>Completed</span>
              <div className='recent-profile' >SF</div>
              <div className="tag-div1">
              <span class="ltbrac">&lt;  </span><span class="eleme">Task Name</span>
              <span class="gtbrac">&gt;</span> <br />
              <span class="ltbrac" style={{fontSize:"12px",color:"grey"}} >&lt;</span>
              <span class="eleme" style={{fontSize:"12px",color:"grey"}} >Project Name</span>
              <span class="gtbrac" style={{fontSize:"12px",color:"grey"}} >&gt;</span>
              </div>
            </div>

            <div className="tasks1"> 
              <span style={{fontWeight:"700",fontSize:"14px",marginLeft:"-17px"}} >Savadfarooque</span>
              <span style={{color:"grey",fontSize:"14px"}} >Changes</span>
              <span style={{color:"blue",fontSize:"14px"}} >Status</span>
              <span style={{color:"grey",fontSize:"14px"}} >to</span>
              <span style={{color:"green",fontSize:"14px"}}>Completed</span>
              <div className='recent-profile' >AS</div>
              <div className="tag-div1">
              <span class="ltbrac">&lt;  </span><span class="eleme">Task Name</span>
              <span class="gtbrac">&gt;</span> <br />
              <span class="ltbrac" style={{fontSize:"12px",color:"grey"}} >&lt;</span>
              <span class="eleme" style={{fontSize:"12px",color:"grey"}} >Project Name</span>
              <span class="gtbrac" style={{fontSize:"12px",color:"grey"}} >&gt;</span>
              </div>
            </div>

            <div className="tasks1"> 
              <span style={{fontWeight:"700",fontSize:"14px",marginLeft:"-17px"}} >Savadfarooque</span><
                span style={{color:"grey",fontSize:"14px"}} >Changes</span>
                <span style={{color:"blue",fontSize:"14px"}} >Status</span>
                <span style={{color:"grey",fontSize:"14px"}} >to</span>
                <span style={{color:"green",fontSize:"14px"}}>Completed</span>
              <div className='recent-profile' >SD</div>
              <div className="tag-div1">
              <span class="ltbrac">&lt;  </span><span class="eleme">Task Name</span>
              <span class="gtbrac">&gt;</span> <br />
              <span class="ltbrac" style={{fontSize:"12px",color:"grey"}} >&lt;</span>
              <span class="eleme" style={{fontSize:"12px",color:"grey"}} >Project Name</span>
              <span class="gtbrac" style={{fontSize:"12px",color:"grey"}} >&gt;</span>
              </div>
            </div>

            <div className="tasks1"> 
              <span style={{fontWeight:"700",fontSize:"14px",marginLeft:"-17px"}} >Savadfarooque</span>
              <span style={{color:"grey",fontSize:"14px"}} >Changes</span>
              <span style={{color:"blue",fontSize:"14px"}} >Status</span>
              <span style={{color:"grey",fontSize:"14px"}} >to</span>
              <span style={{color:"green",fontSize:"14px"}}>Completed</span>
              <div className='recent-profile' >FR</div>
              <div className="tag-div1">
              <span class="ltbrac">&lt;  </span><span class="eleme">Task Name</span>
              <span class="gtbrac">&gt;</span> <br />
              <span class="ltbrac" style={{fontSize:"12px",color:"grey"}} >&lt;</span>
              <span class="eleme" style={{fontSize:"12px",color:"grey"}} >Project Name</span>
              <span class="gtbrac" style={{fontSize:"12px",color:"grey"}} >&gt;</span>
              </div>
            </div>

            <div className="tasks1"> 
              <span style={{fontWeight:"700",fontSize:"14px",marginLeft:"-17px"}} >Savadfarooque</span>
              <span style={{color:"grey",fontSize:"14px"}} >Changes</span>
              <span style={{color:"blue",fontSize:"14px"}} >Status</span>
              <span style={{color:"grey",fontSize:"14px"}} >to</span>
              <span style={{color:"green",fontSize:"14px"}}>Completed</span>
              <div className='recent-profile' >A</div>
              <div className="tag-div1">
              <span class="ltbrac">&lt;  </span><span class="eleme">Task Name</span>
              <span class="gtbrac">&gt;</span> <br />
              <span class="ltbrac" style={{fontSize:"12px",color:"grey"}} >&lt;</span>
              <span class="eleme" style={{fontSize:"12px",color:"grey"}} >Project Name</span>
              <span class="gtbrac" style={{fontSize:"12px",color:"grey"}} >&gt;</span>
              </div>
            </div>

            <div className="tasks1"> 
              <span style={{fontWeight:"700",fontSize:"14px",marginLeft:"-17px"}} >Savadfarooque</span>
              <span style={{color:"grey",fontSize:"14px"}} >Changes</span>
              <span style={{color:"blue",fontSize:"14px"}} >Status</span>
              <span style={{color:"grey",fontSize:"14px"}} >to</span>
              <span style={{color:"green",fontSize:"14px"}}>Completed</span>
              <div className='recent-profile' >BD</div>
              <div className="tag-div1">
              <span class="ltbrac">&lt;  </span><span class="eleme">Task Name</span>
              <span class="gtbrac">&gt;</span> <br />
              <span class="ltbrac" style={{fontSize:"12px",color:"grey"}} >&lt;</span>
              <span class="eleme" style={{fontSize:"12px",color:"grey"}} >Project Name</span>
              <span class="gtbrac" style={{fontSize:"12px",color:"grey"}} >&gt;</span>
              </div>
            </div>

          </div>
          </div>
        </Col>
      </Row>
      
      
    </Container>
  )
}

export default Summary