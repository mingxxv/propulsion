import * as React from 'react';

const WeatherChild = (props) => {

    const bigAssWeather = props.daWeatherrrr

    const forecastName = bigAssWeather?.items[0].general.forecast;
    const forecastTempLow = bigAssWeather?.items[0].general.temperature.low;
    const forecastTempHigh = bigAssWeather?.items[0].general.temperature.high;

    return (
        <div>For the next 24 hours, the weather will be {forecastName}, with a low of {forecastTempLow} and a high of {forecastTempHigh}°C.</div>
    )


}

export default WeatherChild;