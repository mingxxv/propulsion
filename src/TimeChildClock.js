import * as React from 'react';

const TimeChildClock = (props) => {

    const bigAssClock = props.clock.toLocaleTimeString() // honestly this const just makes things neater, not needed but i abit OCD

    return (
        <div id="bigassclock" className="column">{bigAssClock}</div>
    )
};

export default TimeChildClock;