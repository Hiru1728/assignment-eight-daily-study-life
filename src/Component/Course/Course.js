import React from 'react';
import './Course.css';

const Course = ({ course, handleAddToList }) => {
    const { img, name, body, time } = course;

    return (
        <div className='course'>
            <img src={img} alt="" />
            <h5>Name: {name}</h5>
            <p>{body}</p>
            <h5>Time Duration: {time} hours</h5>

            <button onClick={() => handleAddToList(course)} className='btn-list'>
                <p>Add to List</p>
            </button>

        </div>
    );
};

export default Course;