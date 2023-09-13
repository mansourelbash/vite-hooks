import React, { useEffect, useState } from 'react';

const useFetch = (url: string) => {
  const [allValues, setAllValues] = useState<any>(null);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(json => {setAllValues(json);
      })
      .catch(error => {
        console.log('Error fetching data:', error);
      });
  }, [url]);

  return allValues;
};

export default useFetch;
