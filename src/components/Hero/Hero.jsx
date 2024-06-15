import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import ishan3 from '../../assets/ishan3.svg'

const Hero = () => {
  return (
    <div id='home' className='hero'>
       {/* <img src={ishan3} alt="Profile_Image" /> */}
        <h1><span>I'm Ishan Joshi</span> , frontend developer Based in Jaipur </h1>
        <p>I am a frontend developer from Jaipur(rajasthan,India) Ind,  </p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
            {/*<div className="hero-resume">My Resume</div>*/}
        </div>
    </div>
  )
}

export default Hero
