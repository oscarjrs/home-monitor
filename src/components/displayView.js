import React, { useEffect, useState } from 'react';

function DisplayView(props) {

    const f_temp = Math.round((9/5) * props.data.temperature + 32);

    return (
      <div className="data-display">
        <div className="data-display-header">
            {props.data.station_id}
        </div>
        <div className="data-display-header">
            Temperature
        </div>
        {f_temp}°F
        <div className="data-display-header"> 
            Humidity
        </div>
        {Math.round(props.data.humidity)}%
         
      </div>
    );
}

export default DisplayView;