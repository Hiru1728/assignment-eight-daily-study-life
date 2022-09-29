import React from 'react';

const StudyDetails = ({ informations, firstButton }) => {
    console.log(firstButton);
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
                <p>Break Time: {firstButton} second </p>
            </div>
        </div>
    );
};

export default StudyDetails;