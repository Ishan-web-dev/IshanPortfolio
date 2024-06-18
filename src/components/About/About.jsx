import React, { useState } from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'
import ishan2 from '../../assets/ishan2.svg'
const paragraphStyles = {
  WebkitLineClamp:4, 
  WebkitBoxOrient:'vertical',
  overflow:'hidden',
  display:'-webkit-box',
}
const About = () => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div id='about' className='about'>
        <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
    </div>
    <div className="about_sections">
        <div className="about-left">
          <img src={ishan2} alt="" />
          
      </div>
      <div className="about-right">
        <div className="about-para">
            <p style={ isOpen ? null : paragraphStyles }>Hello! I'm Ishan, a passionate and dedicated Front End Developer with a flair for creating visually stunning and highly functional web applications. I thrive on transforming creative designs into dynamic and engaging user experiences.<br/>
            My journey into web development began 1.5 year ago, driven by a curiosity for how things work on the web and a desire to bring ideas to life through code. Since then, I've honed my skills in libraries such as React, constantly staying updated with the latest industry trends and best practices.<br />
            I take pride in my meticulous attention to detail and my commitment to writing clean, maintainable code. Collaboration and communication are at the heart of my work ethic, and I enjoy working closely with designers, back-end developers, and stakeholders to deliver seamless and user-centric solutions.<br /> 
            I am always eager to take on new challenges and am excited about the endless possibilities in the world of web development. Let's create something amazing together!</p>
            <button className='btn-55' onClick={() => setIsOpen(!isOpen)}><span>
              {isOpen ? '...Read less' : '...Read More'}
              </span></button>
        </div>
        
        <div className="about-skills">
            <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}} /></div>
            <div className="about-skill"><p>JavaScript</p><hr style={{width:"30%"}} /></div>
            <div className="about-skill"><p>React JS</p><hr style={{width:"30%"}} /></div>
            <div className="about-skill"><p>TailWind CSS</p><hr style={{width:"40%"}} /></div>
            <div className="about-skill"><p>Figma</p><hr style={{width:"30%"}} /></div>
            <div className="about-skill"><p>GitHub</p><hr style={{width:"30%"}} /></div>
        </div>
      </div>
     </div>
    <div className="about-achievments">
        <div className="about-achievement">
            <h1>SEO EXECUTIVE</h1>
            <p>2 MONTH OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>Certified By</h1>
            <p>SAMYAK INSTITUTE OF COMPUTERS</p>
        </div>
        <hr />
        {/*<div className="about-achievement">
            <h1>15+</h1>
            <p>HAPPY CLIENTS</p>
  </div>*/} 
  </div>
    </div>
  )
}

export default About
