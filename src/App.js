import './styles/App.css';
import React, { useEffect, useState } from 'react';
import useEnvironmentData from './customHooks/environmentDataHook';
import GetData from './adapters/dataAdapter';
import DisplayView from './components/displayView';

function App() {

    const data = GetData();
    const f_temp = Math.round((9/5) * data.temperature + 32);
    
  return (
    <div className="App">
      <header className="App-header">
        <DisplayView data={data} />
      

       
        
      </header>
    </div>
  );
}

export default App;
