import React, { createContext, useContext, useState } from 'react'
import { Button,Container,Row,Col } from 'react-bootstrap';
import "./SideBar.css"
import { FaBook,FaPollH } from "react-icons/fa";
import { SetPage } from "../Store"
import App from '../../App';


function SideBar() {
    

  const {col,setColor} = useContext(SetPage)

    console.log(col)
  return (
    <div className='success sidebar col-2 ' fluid style={{float:"left"}} >
        <div>
         <h6 style={ col ? {color:"blue" } : {color:"black" } } onClick={() => setColor(true) } className='side-summary' ><FaBook  />&nbsp;Summary <span>
           <i className="fa-solid fa-plus side-icon" style={{color:"black"}}  ></i></span>
         </h6> 
         <h6 style={ col ? {color:"black" } : {color:"blue" } } onClick={() => setColor(false)} className='side-project' ><FaPollH />&nbsp; Projects</h6>
         <i className="fa fa-notebook"></i>
         </div>
         
    </div>
  )
  
}

export default SideBar