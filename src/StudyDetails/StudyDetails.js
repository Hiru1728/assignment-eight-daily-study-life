import React from 'react';

const StudyDetails = ({ informations }) => {

    let totalTime = 0;
    for (const subject of informations) {
        totalTime = totalTime + parseInt(subject.time);
    }
    console.log(totalTime);
    return (
        <div>
            <div className='study-time'>
                <p>Study Time: {totalTime} hours</p>
            </div>
            <div className='break-time'>
                <p>Break Time: 0 second </p>
            </div>
        </div>
    );
};

export default StudyDetails;