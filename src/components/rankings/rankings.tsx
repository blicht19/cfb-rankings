import { useEffect, useState } from 'react';
import { useAdvancedStats } from '../../hooks';
import { RankingGenerationInput } from '../ranking-generation-input';
import { StatsTable } from '../stats-table';
import { StatWeight } from '../../types';
import { statMap } from '../../utils';

const statKeys = Object.keys(statMap);

export const Rankings = (): React.JSX.Element => {
  const { isLoading, data } = useAdvancedStats(true);
  const [statWeightsMap, setStatWeightsMap] = useState(new Map<string, StatWeight>());

  useEffect(() => {
    const weightsMap = new Map<string, StatWeight>();
    statKeys.forEach((statKey) => {
      weightsMap.set(statKey, { selected: false, weight: 1 });
    });
    setStatWeightsMap(weightsMap);
  }, []);

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
      <button disabled={isLoading}>Generate Power Rankings</button>
      <StatsTable isLoading={isLoading} title="Team Stats" rows={data} />
    </>
  );
};
