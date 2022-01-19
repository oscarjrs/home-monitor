import './styles/App.css';
import React, { useEffect, useState } from 'react';
import useEnvironmentData from './customHooks/environmentDataHook';
import GetData from './adapters/dataAdapter';

function App() {

  // const [data, updateData] = useEnvironmentData();
  
  const data = GetData();
  
  

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Temperature {data.temperature}
          <br />
          Humidity {data.humidity}
          <br />
          

        </p>
       
      </header>
    </div>
  );
}

export default App;
