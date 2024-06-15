import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'
import theme_pattern from '../../assets/theme_pattern.svg'


const Footer = () => {
  return (
    <div id='footer' className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
        
          <h1>Ishan.J</h1>
            <p>let's connect! Together, we can build exciting projects and explore the ever-evolving landscape of technology.<br />
               Feel free to reach out to me for collaborations, opportunities, or just a chat about the latest tech trends!. </p>
        </div>
        <div className="footer-top-right">
             {/*  <div className="footer-email-input">
                <img src={user_icon} alt="" />
                <input type="email" placeholder='Enter your Email...' />
            </div>
            <div className="footer-subscribe">Subscribe</div>

             <div className="footer-Social-icons">
                <div className=''>FaceBook</div>
                <div>Twitter</div>
                <div>Instagram</div>
                <div>GitHub</div>
                
            </div>*/}
        <ul>
          <li><a href="https://github.com/Ishan-web-dev" target="_blank" rel="noopener noreferrer"> GitHub</a></li>
          <li><a href="https://www.facebook.com/ishaan.joshi.52056/" target="_blank" rel="noopener noreferrer">facebook</a></li>
          <li> <a href="https://twitter.com/IshanJoshi86" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          {/*<li><a href="www.linkedin.com/in/ishan-linkdin" target="_blank" rel="noopener noreferrer">Link</a></li> */}
        </ul>



           
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">© 2021 Ishan Joshi. All Rights Reserved</p>
        <div className="footer-bottom-right">
            <p>Term Of Services</p>
            <p>Privacy Policy</p>
            <p>Conect With Me</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
