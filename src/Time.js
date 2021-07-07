import * as React from 'react'
import { useState, useEffect } from 'react';
import TimeChildClock from './TimeChildClock';
import TimeChildGreeter from './TimeChildGreeter';


const Time = () => {

    const [timeState, setTimeState] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(()=>setTimeState(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    });

    return (
        <div>
            <TimeChildClock clock={timeState} />
            <TimeChildGreeter greetme={timeState}/>
        </div>
    )


}

export default Time;