import React from 'react'
import './Services.css';
import serviceData from '../Services/service_data';
import { GoArrowRight } from "react-icons/go";

const Services = () => {
    return (
        <div className='services'>
            <div className="services-title">
                <h1>What I do</h1>
                {/* <img src="" alt="" /> */}
            </div>
            <div className="services-container">
                {serviceData.map((service, index) => {
                    return <div className="services-format" key={index}>
                        <h3>{service.s_no}</h3>
                        <h2>{service.title}</h2>
                        <p className='desc'>{service.description}</p>
                        <div className="services-readmore">
                            <p>Read more</p>
                            <GoArrowRight />
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Services