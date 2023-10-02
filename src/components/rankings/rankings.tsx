import axios from 'axios';
import { useEffect } from 'react';
import { useQuery } from 'react-query';

export const Rankings = () => {
  const { isLoading, data } = useQuery(
    'stats',
    async () => {
      const response = await axios.get(
        'http://localhost:3000/api/advanced-stats?excludeGarbageTime=true',
      );
      return response.data;
    },
    {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: 1000 * 60 * 60 * 24, // 24 hours. Basically so the fetch will only happen on first load
    },
  );

  useEffect(() => {
    console.log(data);
  }, [data]);

  return <>{isLoading && 'Loading...'}</>;
};
