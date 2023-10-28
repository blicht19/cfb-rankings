import { useCallback, useEffect, useState } from 'react';
import { useAdvancedStats } from '../../hooks';
import { RankingGenerationInputs } from '../ranking-generation-inputs';
import { StatsTable } from '../stats-table';
import { TeamAdvancedStats } from '../../types';
import { statMap } from '../../utils';

const statKeys = Object.keys(statMap);

export const Rankings = (): React.JSX.Element => {
  const { isLoading, data } = useAdvancedStats(true);
  const [stats, setStats] = useState<TeamAdvancedStats[]>([]);

  useEffect(() => {
    if (!isLoading) {
      setStats(structuredClone(data));
    }
  }, [data, isLoading]);

  const onCalculate = useCallback((newStats: TeamAdvancedStats[]) => {
    setStats(newStats);
  }, []);

  return (
    <>
      <RankingGenerationInputs
        statKeys={statKeys}
        stats={stats}
        disabled={isLoading}
        onCalculate={onCalculate}
      />
      <StatsTable isLoading={isLoading || stats.length === 0} title="Team Stats" rows={stats} />
    </>
  );
};
