import * as React from 'react';

const TimeChildGreeter = (props) => {

    const theHugeAssHour = props.greetme.getHours() // honestly this const just makes things neater, not needed but i abit OCD
    // console.log(props.greetme.getHours())
    let whatTimeIsIt = "uwu"

    if (theHugeAssHour < 12) {
        whatTimeIsIt = "morning"
    }
    else if (theHugeAssHour >= 12 && theHugeAssHour < 18) {
        whatTimeIsIt = "afternoon"
    }
    else {
        whatTimeIsIt = "evening"
    }

    return (
        <div id="bigassgreeter" className="column">Good {whatTimeIsIt}, Gordon.</div>
    )
};

export default TimeChildGreeter;