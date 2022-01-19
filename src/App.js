import './styles/App.css';
import React, { useEffect, useState } from 'react';
import { get } from './adapters/dataAdapter.js'
import useEnvironmentData from './customHooks/environmentDataHook';

function App() {

  //const [temperature, setTemperature] = useState(0)
  // const [humidity, setHumidity] = useState(0)
  const [environmentData, setEnvironmentData] = useEnvironmentData([]);
  
  const fetchData = async () => {
      const response = await fetch("http://localhost:3000/data");
      const tempData = await response.json();
      setEnvironmentData(tempData);
      console.log("Fetched Data...")
      console.log("Temperature: " + environmentData.temperature);
      console.log("Humidity: " + environmentData.humidity);
    }

    fetchData()
      .catch(console.error);
  
  // Updates data every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => fetchData(), 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Temperature {environmentData.temperature}
          <br />
          Humidity {environmentData.humidity}
          <br />
          

        </p>
       
      </header>
    </div>
  );
}

export default App;
