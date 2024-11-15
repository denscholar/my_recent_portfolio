import './Contact.css'
import React, { useState } from 'react'
import { FaEnvelope } from 'react-icons/fa';
import { FaLocationDot } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";


const Contact = () => {
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [message, setMessage] = useState("")

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "6fcf8220-8074-45f2-9c07-45111921f99e");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            alert(res.message);
            setEmail("");
            setMessage("");
            setName("");
        }
    };

    return (
        <div className='contact' id='contact'>
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
                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="Your name">Name</label>
                    <input type="text" value={name} placeholder='Enter your name' name='name' onChange={(e) => setName(e.target.value)} required />
                    <label htmlFor="">Email</label>
                    <input type="email" value={email} placeholder='Enter your email' name='email' onChange={(e) => setEmail(e.target.value)} required />
                    <label htmlFor="">Write your message here</label>
                    <textarea name="message" value={message} rows="8" id="" placeholder='Enter your message' onChange={(e) => setMessage(e.target.value)} required></textarea>
                    <button type='submit' className="contact-submit">
                        Submit Now
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact