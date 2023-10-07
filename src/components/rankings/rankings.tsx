import { useEffect } from 'react';
import { useAdvancedStats } from '../../hooks';

export const Rankings = () => {
  const { isLoading, data } = useAdvancedStats(true);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return <>{isLoading && 'Loading...'}</>;
};
