import * as React from "react"

const About = () => {
// this is just an about page nothing special
    return (
        <>
        <div className="column">
        <h1 className="title">What is this, anyway?</h1>
            <p>This app was written in one week by someone who learnt Javascript, jQuery, and React in a month.</p>
            <p>It was designed as an alternative/replacement to the popular browser extension <a href="https://momentumdash.com/">Momentum</a>.</p>
            <p>However, it now has a clock which updates in realtime, the local 24h weather, a bookmark component, and a dog pic component.</p>
            <p>Please enjoy.</p>
            <p>- Gordon Chia (mingxxv)</p>
        </div>
        </>
    )
}

export default About;