import * as React from 'react'
import { useState, useEffect } from 'react';


const Time = () => {

    const [timeState, setTimeState] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(()=>setTimeState(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    });

    return (
        <div id="timelol" className="column">
            {timeState.toLocaleTimeString()} 
        </div>
    )


}

export default Time;