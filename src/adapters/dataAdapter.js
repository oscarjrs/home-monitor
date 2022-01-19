import React, { useEffect, useState } from 'react';

function GetData()
{
    const fetchData = async () => {
        console.log("Fetching data...");
        const response = await fetch("http://localhost:3000/data");
        console.log("Got response!");
        const tempData = await response.json();
        console.log("Got json data!");
        setEnvironmentData(tempData);
        console.log("Fetched Data...")
        console.log("Temperature: " + environmentData.temperature);
        console.log("Humidity: " + environmentData.humidity);
      }
  

    
    return("testreturn")
}

export default GetData;
