import React, { useEffect, useState } from 'react';
import image from '../../images/7083.jpg'
import StudyDetails from '../../StudyDetails/StudyDetails';
import { addToDb, getstoredBreakTime } from '../../utilities/fakedb';
import './Information.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

const Information = ({ informations }) => {
    const [firstButton, setFirstButton] = useState(0);


    useEffect(() => {
        const storedBreakTime = getstoredBreakTime();
        let number = 0;
        for (const id in storedBreakTime) {
            number = id;
        }
        setFirstButton(number)
    }, [])

    const handleBreakBtn = (breakTime) => {
        setFirstButton(breakTime);
        addToDb(breakTime);
    }

    const notify = () => {

        toast('Congratulatios')
    }

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
                <button onClick={() => handleBreakBtn(10)} className='btn-text'>10m</button>
                <button onClick={() => handleBreakBtn(40)} className='btn-text'>40m</button>
                <button onClick={() => handleBreakBtn(30)} className='btn-text'>30m</button>
                <button onClick={() => handleBreakBtn(20)} className='btn-text'>20m</button>
            </div>
            <h4>Study Details</h4>
            <StudyDetails
                informations={informations}
                firstButton={firstButton}
            ></StudyDetails>
            <button onClick={notify} className='btn-active'>
                <h3>Activity Completed</h3>
            </button>
        </div >
    );
};

export default Information;