import React, { useState } from 'react';
import { useEffect } from 'react';
import logo from '../../images/images__1_-removebg-preview.png'
import Question from '../../Question/Question';
import Course from '../Course/Course';
import Information from '../Information/Information';
import './Topic.css'

const Topic = () => {
    const [courses, setCourses] = useState([]);
    const [informations, setInformations] = useState([])

    useEffect(() => {
        fetch('information.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    const handleAddToList = (setCourse) => {
        const newInformation = [...informations, setCourse];
        setInformations(newInformation);
    }

    return (
        <div>
            <div className='topic'>
                <div className='course-section'>
                    <div className='logo-section'>
                        <img className='logo-img' src={logo} alt="" />
                        <h1>Daily Study Life</h1>
                    </div>

                    <div className='load-course'>
                        {
                            courses.map(course => <Course
                                course={course}
                                handleAddToList={handleAddToList}
                                key={course.id}
                            ></Course>)
                        }
                    </div>
                    <Question></Question>
                </div>
                <div className='information-section'>
                    <Information
                        informations={informations}
                    ></Information>
                </div>
            </div>
        </div>
    );
};

export default Topic;