import './Contact.css'
import React from 'react'
import { FaEnvelope } from 'react-icons/fa';
import { FaLocationDot } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";


const Contact = () => {
    return (
        <div className='contact'>
            <div className="contact-title">
                <h1>Get in touch</h1>
            </div>

            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's Talk</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, ipsa.</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <FaEnvelope /><p>dennisthegenius036@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <FiPhoneCall /> <p>+2347031501124</p>
                        </div>
                        <div className="contact-detail">
                            <FaLocationDot /> <p>Lagos, Nigeria</p>
                        </div>
                    </div>
                </div>
                <form action="" className="contact-right">
                    <label htmlFor="Your name">Name</label>
                    <input type="text" placeholder='Enter your name' name='name' />
                    <label htmlFor="">Email</label>
                    <input type="text" placeholder='Enter your email' name='email' />
                    <label htmlFor="">Write ypur message here</label>
                    <textarea name="message" rows="8"  id="" placeholder='Enter your message'></textarea>
                    <button type='submit' className="contact-submit">
                        Submit Now
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact