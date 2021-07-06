import './App.css';
import * as React from 'react';
import WeatherAPI from './Weather.js'
import Time from './Time.js'
import AirTableList from './AirTableList'

function Dashboard() {
  return (
    <div className="App">
      <Time />
      <WeatherAPI />
      <AirTableList />
  
    </div>
  );
}

export default Dashboard;
