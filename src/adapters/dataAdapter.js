import React, { useEffect, useState } from 'react';
import useEnvironmentData from '.././customHooks/environmentDataHook';


function GetData()
{
    const [data, updateData] = useEnvironmentData();

    console.log("Ready to fetch...");

    // Updates data every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => fetchData(), 5000);
        return () => clearInterval(interval);
    }, []);
    
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

    
    return data
}

export default GetData;
