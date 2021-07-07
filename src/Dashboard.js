import './App.css';
import * as React from 'react';
import WeatherAPI from './Weather.js'
import Time from './Time.js'
import AirTableList from './AirTableList'
import Dog from './Dog'

function Dashboard() {
  return (
    <div className="App">
      <Time />
      <AirTableList />
      <WeatherAPI />
      <Dog />
  
    </div>
  );
}

export default Dashboard;
