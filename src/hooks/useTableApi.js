import { useState, useEffect } from 'react';

export function useTableApi(baseUrl) {
  const [data, setData] = useState([]);

  const getData = async () => {
    const result = await fetch(baseUrl).then((response) => response.json());

    setData(result);
  };

  useEffect(() => {
    getData();
  }, []);

  const api = {
    getData,
    setData,
  };

  return [data, api];
}
