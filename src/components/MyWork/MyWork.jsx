import Work from '../Work/Work.jsx';
import './MyWork.css';
import mywork_data from './mywork_data.js'


import React from 'react'

const MyWork = () => {

    return (
        <div className='mywork' id='services'>
            <div className="mywork-title">
                <h1>My Latest Projects</h1>
            </div>
            <div className="mywork-container">
                {mywork_data.map((work, index) => {
                    return <Work key={index} work={work} />
                })}
            </div>
        </div>
    )
}

export default MyWork