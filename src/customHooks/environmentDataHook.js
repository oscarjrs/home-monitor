import React, { useEffect, useState } from 'react';

function useEnvironmentData(newEnvironmentData) {
    
    const [environmentData, setEnvironmentData] = useState([]);

    setEnvironmentData(newEnvironmentData);

    return environmentData;
}

export default useEnvironmentData;
