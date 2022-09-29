import React from 'react';
import './StudyDetails.css'

const StudyDetails = ({ informations, firstButton }) => {
    let totalTime = 0;
    for (const subject of informations) {
        totalTime = totalTime + parseInt(subject.time);
    }


    return (
        <div>
            <div className='study-time'>
                <p>Study Time: {totalTime} hours</p>
            </div>
            <div className='break-time'>
                <p>Break Time: {firstButton} minutes </p>
            </div>
        </div>
    );
};

export default StudyDetails;