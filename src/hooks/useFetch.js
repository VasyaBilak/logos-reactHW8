import { useState, useEffect } from 'react';

function useFetch(endpoint) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com${endpoint}`);
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
        return;
      }
    };

    fetchData();
  }, [endpoint]);

  return { data };
}

export default useFetch;