import * as React from "react";
import { useEffect, useState } from 'react';


const WeatherAPI = () => {

    const [weatherData, setWeatherData] = useState();
    const url = 'https://api.data.gov.sg/v1/environment/24-hour-weather-forecast'

    
    useEffect(() => {
        
        const makeApiCall = () => { // ACTUALLY THIS MAKEAPICALL IS STUPID
            fetch(url)
            .then((res) => res.json())
            .then((data) => {
                console.log("This is the weather data", data);
                setWeatherData(data);
            });
        };
        makeApiCall();
    }, []);
    
    console.log(weatherData?.items[0].general.forecast) // PUT A ?. OR DIE A PAINFUL DEATH LAH CHEEBYE

    const forecastName = weatherData?.items[0].general.forecast;
    const forecastTempLow = weatherData?.items[0].general.temperature.low;
    const forecastTempHigh = weatherData?.items[0].general.temperature.high;


    return (
        
        <div className="column">The weather for the next 24 hours is expected to be {forecastName}, with a low of {forecastTempLow} and a high of {forecastTempHigh} degrees celsius.</div>
        
    )
};

export default WeatherAPI;







