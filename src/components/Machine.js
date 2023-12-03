import React from 'react'
import './styles/machine.css'
import { useState, useEffect } from 'react';
import sendSignalToLineGroup from '../sent_line'
function Machine(props) {
    const { name, img, time_left } = props;
    const [time, setTime] = useState(time_left);
    const [alredy_sent, setAlredy_sent] = useState(false);
    const [used, setUsed] = useState(false);
    const [status, setStatus] = useState(props.status);
    useEffect(() => {
        let interval = null;
        if (time < 60 && status === 2 && alredy_sent === false) {
            const msg = `Washing machine ${name} has less than 1 minute remaining.`
            sendSignalToLineGroup(msg)
            setAlredy_sent(true)
        } else if (time <= 0) {
            setStatus(1)
            clearInterval(interval);

        }
        if (time > 0) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime - 1);
            }, 1000);
        }
        return () => {
            clearInterval(interval);
        };
    }, [time, alredy_sent, name, status]);
    const formatTime = (seconds) => {

        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    };
    const watch_logo = <svg width="40" height="25" viewBox="20 -15 50 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 0H93V89H0V0Z" fill="white" fill-opacity="0.01" /><path d="M46.5 81.5834C67.901 81.5834 85.25 64.9806 85.25 44.5C85.25 24.0195 67.901 7.41669 46.5 7.41669C25.099 7.41669 7.75 24.0195 7.75 44.5C7.75 64.9806 25.099 81.5834 46.5 81.5834Z" stroke="#FEFEFE" stroke-width="5" stroke-linejoin="round" /><path d="M46.516 22.25L46.5137 44.5163L62.9425 60.2385" stroke="#F8F8F8" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" /></svg>

    const text = status === 0 ?
        'Unavalible'
        : status === 1 ?
            'Avaliable'
            : time === 0 ? 'Avaliable'
                : <>{watch_logo}~{formatTime(time)} minute</>

    const color = status === 0 ? 'red' : status === 1 ? '#11eb68' : time === 0 ? '#11eb68' : 'orange'
    const useMachine = () => {
        setUsed(true);
        // simulate time for washing
        setTime(600) ; 
        setStatus(2)
    }

    return (
        <div className='machine' >

            <button className="btn"onClick={useMachine} disabled={used || status!== 1}>start</button>  {/* simulate start machine */}
            <div class="circle" style={{ backgroundColor: `${color}` }}></div>
            <div class="name">{name}</div>
            <img src={img} alt='Machine' width={'120px'} />
            <h3 className='text-status'>
                {text}
            </h3>
        </div>
    )
}

export default Machine