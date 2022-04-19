import React from 'react'
import './experience.css'
const Experience = () => {
  return (
<div className="e-wrapper" id='section2'>
  <div className="e-wrapper-header">
  <span>Experience&</span><span>Education</span>
  </div>
  <div className="e-left">
    <div className="experience">
      <h4>Work Experience</h4>
      <ul style={{listStyleType:'none'}}>PI R Engineering
          <li>Position:Mechanical Engineering</li>
          <li>-Design an air conditioner system</li>
          <li>-Management supplies and control
construction</li>
      </ul>
    </div>
  </div>
  <div className="e-right">
    <div className="education">
     <h4>Education</h4>
     <ul style={{listStyleType:'none'}}>Kasetsart University
          <li>Major:Mechanical Engineering</li>
          <li>(2016-2020)</li>
      </ul>
    </div>
  </div>
</div>


  )
}

export default Experience