import './styles/App.css';
import React, { useEffect, useState } from 'react';
import { get } from './adapters/dataAdapter.js'

function App() {

  const [temperature, setTemperature] = useState(0)
  const [humidity, setHumidity] = useState(0)
  
  const fetchData = async () => {
      const response = await fetch("http://localhost:3000/data");
      const tempData = await response.json();
      console.log("Fetched Data...")
      setTemperature(tempData.temperature);
      setHumidity(tempData.humidity);
      console.log("Temperature: " + tempData.temperature);
      console.log("Humidity: " + tempData.humidity);
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
          Temperature {temperature}
          <br />
          Humidity {humidity}
          <br />
          

        </p>
       
      </header>
    </div>
  );
}

export default App;
