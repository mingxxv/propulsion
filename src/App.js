import './App.css';
import * as React from 'react';
import WeatherAPI from './Weather.js'
import Time from './Time.js'
import AirTableList from './AirTableList'
function App() {
  return (
    <div className="App">
      <WeatherAPI />
      <AirTableList />
      <Time />
    </div>
  );
}

export default App;
