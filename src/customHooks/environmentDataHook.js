import React, { useEffect, useState } from 'react';

function useEnvironmentData() {
    
    const [environmentData, setEnvironmentData] = useState([]);

    function updateData(newData) {
        setEnvironmentData(newData);
    }
    
    return [environmentData, updateData];
}

export default useEnvironmentData;
