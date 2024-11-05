import React from 'react'
import './Work.css';
import { IoArrowForward } from "react-icons/io5";
import { IoArrowBack } from "react-icons/io5";


const Work = (props) => {
  const { w_name, w_img, url, gitHub } = props.work;
  console.log(props);

  return (
    <div className='image-wrapper'>
      <img src={w_img} alt="image" />
      <div className="sub-container">
        <p>{w_name}</p>
        <div className="action-buttons">
          <a href={url} target='_blank'><IoArrowBack /> Project </a>
          <a href={gitHub} target='_blank'>GitHub <IoArrowForward /></a>
        </div>
      </div>
    </div>
  )
}

export default Work