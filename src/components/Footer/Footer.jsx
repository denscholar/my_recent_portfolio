import React from 'react'
import './Footer.css'
import { FaUser } from 'react-icons/fa'



const footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src="" alt="" className='footer-logo'/>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, quibusdam?</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <FaUser />
                    <input type="email" placeholder='Enter your email' />
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left">@ 2024 Dennis Akagha, All right rerserved</p>
            <div className="footer-bottom-right">
                <p>Terms of Service</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
        </div>
    </div>
  )
}

export default footer