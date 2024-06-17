import React, { useState } from 'react'
import {Link} from 'react-router-dom'

export default function Navbar(props){

    const[dark, setDark] = useState('Dark mode')
    const darkmode = ()=>{
  if(document.body.style.background!== "black")
    {
      document.body.style.background= "black";
      setDark("Light Mode");
    }
    else{
      document.body.style.background= "white";
      setDark(" Dark Mode");
    }
   
    }
    return (
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="#">NewsApp</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/business">Business</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/entertainment">Entertainment</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/science">Science</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/health">Health</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="technology">Technology</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/sports">Sports</Link>
            </li>
        
         </ul>
            <div className="form-check form-switch" style={{transform: "translateX(17px)"}}>
  <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={darkmode}/>
  <label className="form-check-label text-light text-end" htmlFor="flexSwitchCheckDefault">{dark}</label>
          </div>
         </div> 
      </div>
      
    </nav> 
    )
  }
