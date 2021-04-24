import React from 'react';
import { FcApproval } from 'react-icons/fc';

import './app.scss';
import Weathers from './components/Weathers';
import WeatherChart from './components/WeatherChart';

const App = () => {
  return (
    <div className="app">
      <div className="header">
        <h1>Welcome to Weather App</h1>
        <div className="hideSm ml-1">
          <FcApproval size={30} />
        </div>
      </div>
      <Weathers />
      <WeatherChart />
    </div>
  );
};

export default App;
