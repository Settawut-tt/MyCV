import React from 'react'
import './services.css'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from '../Card/Card'
import Resume from './CV.pdf'

const Services = () => {
  return (
    <div className="services" id='section3'>
        {/* left side*/}
        <div className="awesome">
        <span>My</span>
        <span>Project</span>
        <spane>This is my project I did before
        </spane>
        <div className="blur s-blur1" style={{background:"var(--purple)"}}></div>
        <a href = {Resume} download>
        <button className="button s-button">Dowload CV</button>
        </a>
        <div className="blur s-blurl" style ={{background:"#94deed93"}}></div>
        </div>
        {/*right side*/}
        <div className="cards">
            <div style ={{left: '14rem'}}>
              <Card
              emoji = {HeartEmoji}
              heading = {'Activity Report'}
              quote = {'Track your exercise'}
              detail = {""}
              />
            </div>
            {/* second card*/}
            {<div style={{top: "12rem", left: "-4rem"}}>
            <Card
              emoji = {Glasses}
              heading = {'Tormonto'}
              quote = {'Front-end shampoo webpage '}
              detail = {"https://www.tormonto.com/"}
              />
            </div> }
             {/* third card*/}
             {<div style={{top: "19rem", left: "20rem"}}>
            <Card
              emoji = {Humble}
              heading = {'Tester'}
              quote = {'Jest'}
              detail = {"Selenium"}
              />
            </div> }
              <div className="blur s-blur2" style={{background:"var(--purple)"}}></div>
            </div>
        </div>
   
  )
}

export default Services