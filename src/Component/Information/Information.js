import React from 'react';
import image from '../../images/7083.jpg'
import StudyDetails from '../../StudyDetails/StudyDetails';
import './Information.css'

const Information = () => {
    return (
        <div className='information'>
            <div className='img-name'>
                <img src={image} alt="" />
                <h2>Hiru Dey</h2>
            </div>
            <div className='important-roles'>
                <p>Revised</p>
                <p>Practice</p>
                <p>Sincerity</p>
            </div>
            <h4>Added a Break</h4>
            <div className='btn-section'>
                <button className='btn-text'>10s</button>
                <button className='btn-text'>40s</button>
                <button className='btn-text'>30s</button>
                <button className='btn-text'>20</button>
            </div>
            <h4>Study Details</h4>
            <StudyDetails></StudyDetails>
            <button className='btn-active'>
                <h3>Activity Completed</h3>
            </button>
        </div>
    );
};

export default Information;