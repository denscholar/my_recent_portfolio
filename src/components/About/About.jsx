import React from 'react'
import './About.css';
// import profile_image from '../../assets/profile_image.jpg'
// import 

const About = () => {
    return (
        <div id='about' className='about'>
            <div className="stars"></div>
            <div className="clouds"></div>
            {/* <div className=""></div> */}
            <div className="about-title">
                <h1>About Me</h1>
                <img src="" alt="" />
            </div>

            <div className="about-sections">
                <div className="about-left">

                </div>
                <div className="orbit">
                    <div className="python"></div>
                    <div className="react"></div>
                    <div className="django"></div>
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, libero optio? Laborum, praesentium! In natus asperiores adipisci, soluta alias suscipit.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, libero optio? Laborum, praesentium! In natus asperiores adipisci, soluta alias suscipit.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill">
                            <p>Python & Django</p>
                            <hr style={{ width: "80%" }} />
                            {/* <p>80%</p> */}
                        </div>
                        <div className="about-skill">
                            <p>JavaScript</p>
                            <hr style={{ width: "70%" }} />
                            {/* <p>80%</p> */}
                        </div>
                        <div className="about-skill">
                            <p>ReactJs</p>
                            <hr style={{ width: "80%" }} />
                            {/* <p>80%</p> */}
                        </div>
                        <div className="about-skill">
                            <p>HTML & CSS</p>
                            <hr style={{ width: "90%" }} />
                            {/* <p>80%</p> */}
                        </div>
                    </div>
                </div>

            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>10+</h1>
                    <p>Years of Experience</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>10+</h1>
                    <p>Projects Completed</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>10+</h1>
                    <p>Happy Clients</p>
                </div>
            </div>
        </div>
    )
}

export default About