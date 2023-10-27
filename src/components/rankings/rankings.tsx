import { useCallback, useEffect, useState } from 'react';
import { useAdvancedStats } from '../../hooks';
import { RankingGenerationInput } from '../ranking-generation-input';
import { StatsTable } from '../stats-table';
import { StatWeight, TeamAdvancedStats } from '../../types';
import { calculatePowerRankings, statMap } from '../../utils';

const statKeys = Object.keys(statMap);

export const Rankings = (): React.JSX.Element => {
  const { isLoading, data } = useAdvancedStats(true);
  const [statWeightsMap, setStatWeightsMap] = useState(new Map<string, StatWeight>());
  const [stats, setStats] = useState<TeamAdvancedStats[]>([]);

  useEffect(() => {
    const weightsMap = new Map<string, StatWeight>();
    statKeys.forEach((statKey) => {
      weightsMap.set(statKey, { selected: false, weight: 1 });
    });
    setStatWeightsMap(weightsMap);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      setStats(structuredClone(data));
    }
  }, [data, isLoading]);

  const calculate = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.preventDefault();
      setStats(calculatePowerRankings(data));
    },
    [data],
  );

  return (
    <>
      {statKeys.map((statKey) => {
        return (
          <RankingGenerationInput
            key={statKey}
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            title={statMap[statKey].name}
            checked={statWeightsMap?.get(statKey)?.selected ?? false}
            weight={statWeightsMap.get(statKey)?.weight ?? 1}
            onCheckedChange={() => {
              setStatWeightsMap(
                new Map<string, StatWeight>(
                  statWeightsMap.set(statKey, {
                    weight: statWeightsMap.get(statKey)?.weight ?? 1,
                    selected: !statWeightsMap.get(statKey)?.selected,
                  }),
                ),
              );
            }}
            onSliderChange={(newValue: number) => {
              setStatWeightsMap(
                new Map<string, StatWeight>(
                  statWeightsMap.set(statKey, {
                    weight: newValue,
                    selected: statWeightsMap.get(statKey)?.selected ?? false,
                  }),
                ),
              );
            }}
          />
        );
      })}
      <button onClick={calculate} disabled={isLoading}>
        Generate Power Rankings
      </button>
      <StatsTable isLoading={isLoading || stats.length === 0} title="Team Stats" rows={stats} />
    </>
  );
};
