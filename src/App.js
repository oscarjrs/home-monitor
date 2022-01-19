import './styles/App.css';
import React, { useEffect, useState } from 'react';
import useEnvironmentData from './customHooks/environmentDataHook';

function App() {

  const [data, updateData] = useEnvironmentData();
  
  const fetchData = async () => {
      const response = await fetch("http://localhost:3000/data");
      const tempData = await response.json();
      console.log("Fetched Data...")
      // setTemperature(tempData.temperature);
      // setHumidity(tempData.humidity);
      updateData(tempData);
      console.log("Temperature: " + tempData.temperature);
      console.log("Humidity: " + tempData.humidity);
    }

  
  // Updates data every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => fetchData(), 5000);
    return () => clearInterval(interval);
  }, []);

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
