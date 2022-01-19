import './styles/App.css';
import React, { useEffect, useState } from 'react';
import useEnvironmentData from './customHooks/environmentDataHook';
import GetData from './adapters/dataAdapter';

function App() {

    const data = GetData();
    
  return (
    <div className="App">
      <header className="App-header">
        <div className="data-display">
          {data.id}
          <div className='data-display-header'>
            Temperature
          </div>
          {data.temperature}
          <div className='data-display-header'>
            Humidity
          </div>     
          {data.humidity}
          <br />
               
        </div>
        
      </header>
    </div>
  );
}

export default App;
