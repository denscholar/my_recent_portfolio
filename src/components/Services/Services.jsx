import React from 'react'
import './Services.css';
import serviceData from  '../Services/service_data';

const Services = () => {
  return (
    <div className='services'>
        <div className="services-title">
            <h1>My Services</h1>
            {/* <img src="" alt="" /> */}
        </div>
        <div className="services-container">
    {serviceData.map((service, index) => {
        return <div className="services-format" key={index}>
            <h3>{service.title}</h3>
            <h3>{service.description}</h3>
        </div>
    })}
        </div>
    </div>
  )
}

export default Services