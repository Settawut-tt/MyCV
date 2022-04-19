import React from 'react'
import './intro.css'
import Github from '../../img/github.png'
import Linked from '../../img/linkedin.png'
import Phone from '../../img/phone.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/ipic.png'
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'

const Intro = () => {
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span>Hihi! I Am </span>
                <span>Settawut Thaingthat</span>
                <span>I have an interest in atomation tester
 and cyber security. I love check
for a smart contract. I had my
information webpage project on
Github. I am on a cross-work path but I have a
strong passion for the tech industry.
I dreamed to build something that useful
for people.</span>
            </div>
            <button className="button i-button">Hire Me</button>
        <div className="i-icons">
           <a href="https://github.com/Settawut-tt"> <img src={Github} alt=""/></a>
            <a href="https://www.linkedin.com/in/settawut-thaingthat-ab13a0225/"><img src={Linked} alt="" /></a>
            <img class="image__img" src={Phone} alt=""  />
    <div class="image__overlay image__overlay--primary">
        <div class="image__title">PhoneNo.</div>
        <p class="image__description">
            082-237-8842
        </p>
    </div>
        </div>
        </div>
        <div className="i-right">
            <img src={Vector1} alt="" />
            <img src={Vector2} alt="" />
            <img src={boy} alt="" />
            <img src={glassesimoji} alt="" />
            <div style={{top: '-4%', left:'68%'}}> 
                <FloatingDiv image={Crown} txt1='Web' txt2='Devloper'/>
            </div>
            <div style={{top: '35rem', left:'0rem'}}>
                <FloatingDiv image={thumbup} txt1='QA' txt2='Tester' />
            </div>
            {/* blur divs*/}
            <div className='blur' style={{background:"rgb (238 210 255)"}}></div>
            <div className='blur' style={{background:'#8cd4e2',top:'17rem',width:'21rem',height:'11rem',left:'-9rem'}}></div>
        </div>
    </div>
  )
}

export default Intro