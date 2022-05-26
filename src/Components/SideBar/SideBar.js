import React, { useState } from 'react'
import { Button,Container,ToggleButton,ButtonGroup } from 'react-bootstrap';
import "./SideBar.css"
import { FaBook,FaPollH } from "react-icons/fa";


function SideBar() {
    const [col, setColor] = useState(true)

    
  return (
    <div className='success sidebar' >
        <h6 style={ col ? {color:"black" } : {color:"blue" } } onClick={() => setColor(false) } ><FaBook />&nbsp;Summary</h6> 
        <i class="fa-solid fa-plus" style={{float:"right",marginRight:"20px"}} ></i> <br /> <br /> 
        <h6 style={ col ? {color:"blue" } : {color:"black" } } onClick={() => setColor(true)} ><FaPollH />&nbsp; Projects</h6>
        <i class="fa fa-notebook"></i>
        
    </div>
  )
}

export default SideBar