import * as React from "react";
import { useEffect, useState } from 'react';
import WeatherChild from './WeatherChild.js';


const WeatherAPI = () => {

    const [weatherData, setWeatherData] = useState();
    const url = 'https://api.data.gov.sg/v1/environment/24-hour-weather-forecast'

    
    useEffect(() => {
        
        const makeApiCall = () => { // make the call, fam. Make it!!
            fetch(url)
            .then((res) => res.json())
            .then((data) => {
                console.log("This is the weather data", data);
                setWeatherData(data);
            });
        };
        makeApiCall();
    }, []);
    
    console.log(weatherData?.items[0].general.forecast) // PUT A ?. OR DIE A PAINFUL DEATH lmao (this is basically a replacement for await)

    


    return (
        
        <WeatherChild daWeatherrrr={weatherData} />
        
    )
};

export default WeatherAPI;







