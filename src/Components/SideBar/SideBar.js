import React, { useState } from 'react'
import { Button,Container,Row,Col } from 'react-bootstrap';
import "./SideBar.css"
import { FaBook,FaPollH } from "react-icons/fa";


function SideBar() {
    const [col, setColor] = useState(true)

    
  return (
    <div className='success sidebar '   >
   
     
        <div>
         
         <h6 style={ col ? {color:"black" } : {color:"blue" } } onClick={() => setColor(false) } className='side-summary' ><FaBook />&nbsp;Summary <span><i className="fa-solid fa-plus side-icon"   ></i></span>
         </h6> 
         <h6 style={ col ? {color:"blue" } : {color:"black" } } onClick={() => setColor(true)} className='side-project' ><FaPollH />&nbsp; Projects</h6>
         <i className="fa fa-notebook"></i>
         </div>
      
       
    </div>
  )
}

export default SideBar