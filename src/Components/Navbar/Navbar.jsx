import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <div className="n-wrapper" id='section1'> 
        <div className="n-left">
            <div className="n-name">Art</div>
            <span>toggle</span>
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul style ={{listStyleType: 'none'}}>
                    <li><a href="#section1">Home</a></li>
                    <li><a href ="#section2">Experience&Education</a></li>
                   <li><a href="#section3">Project</a></li> 
                </ul>
            </div>
            <button className="button n-button">
                Contact Me!
            </button>
        </div>
    </div>
  )
}

export default Navbar