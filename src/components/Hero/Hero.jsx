import React from 'react'
import Profile_image from '../../assets/profile_image.jpg'
import '../Hero/Hero.css';

const Hero = () => {
    return (
        <div className='hero'>
            <div className="image-container">
                <img src={Profile_image} alt="" />
            </div>
            <h1><span>I'm Dennis</span>, Full-stack Software Engineer</h1>
            <p>With over 4 years of experience</p>
            <div className="hero-action">
                <div className="hero-connect">Connect with me</div>
                <div className="hero-resume">My Resume</div>
            </div>
        </div>
    )
}

export default Hero