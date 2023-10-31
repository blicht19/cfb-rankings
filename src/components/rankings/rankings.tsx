import { useCallback } from 'react';
import { useAdvancedStats } from '../../hooks';
import { RankingGenerationInputs } from '../ranking-generation-inputs';
import { StatsTable } from '../stats-table';
import { TeamAdvancedStats } from '../../types';
import { queryClient, statMap } from '../../utils';

const statKeys = Object.keys(statMap);

export const Rankings = (): React.JSX.Element => {
  const { isLoading, data, key } = useAdvancedStats(true);

  const onCalculate = useCallback(
    (newStats: TeamAdvancedStats[]) => {
      queryClient.setQueryData(key, newStats);
    },
    [key],
  );

  return (
    <>
      <RankingGenerationInputs
        statKeys={statKeys}
        stats={data}
        disabled={isLoading}
        onCalculate={onCalculate}
      />
      <StatsTable isLoading={isLoading} title="Team Stats" rows={data} />
    </>
  );
};
