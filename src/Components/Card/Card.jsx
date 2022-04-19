import React from 'react'
import './card.css'

const Card = ({emoji,heading,detail,quote}) => {
  return (
    <div className="card">
        <img src={emoji} alt="" />
        <span>{heading}</span>
        <span>{quote}</span>
        <span><button className='c-button'><a href= {detail}>Learn more</a></button></span>
        
    </div>
  )
}

export default Card