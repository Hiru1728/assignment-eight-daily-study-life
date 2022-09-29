import React from 'react';

const StudyDetails = ({ informations }) => {

    let countTime = 0;
    for (const id in informations) {
        countTime = parseInt(informations.time);
    }
    console.log(countTime);
    return (
        <div>
            <div className='study-time'>
                <p>Study Time: {informations.time} hours</p>
            </div>
            <div className='break-time'>
                <p>Break Time: 0 second </p>
            </div>
        </div>
    );
};

export default StudyDetails;