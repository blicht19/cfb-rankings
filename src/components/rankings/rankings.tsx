import { useEffect } from 'react';
import { useAdvancedStats } from '../../hooks';
import { StatsTable } from '../stats-table';

export const Rankings = (): React.JSX.Element => {
  const { isLoading, data } = useAdvancedStats(true);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      {isLoading && 'Loading...'}
      {!isLoading && <StatsTable title="Team Stats" rows={data} />}
    </>
  );
};
