import React from 'react'
import Logo from '../../assets/profile_image.jpg'
import '../Hero/Hero.css';

const Hero = () => {
    return (
        <div className='hero'>
            <div className="image-container">
                <img src={Logo} alt="" />
            </div>
            <h1><span>I'm Dennis</span>, Full-stack Software Engineer</h1>
            <p>With over 4 years of experience</p>
            <duv className="hero-action">
                <div className="hero-connect">Connect with me</div>
                <div className="hero-resume">My Resume</div>
            </duv>
        </div>
    )
}

export default Hero