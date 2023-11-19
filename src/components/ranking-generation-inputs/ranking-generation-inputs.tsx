import { useCallback, useEffect, useState } from 'react';
import { RankingGenerationInput } from './ranking-generation-input';
import { calculatePowerRankings, statMap } from '../../utils';
import { RankingGenerationInputsProps } from './ranking-generation-inputs.types';
import { StatWeight } from '../../types';
import classes from './ranking-generation-inputs.module.css';

export const RankingGenerationInputs = (props: RankingGenerationInputsProps): React.JSX.Element => {
  const [statWeightsMap, setStatWeightsMap] = useState(new Map<string, StatWeight>());

  useEffect(() => {
    const weightsMap = new Map<string, StatWeight>();
    props.statKeys.forEach((statKey) => {
      weightsMap.set(statKey, { selected: false, weight: 1 });
    });
    setStatWeightsMap(weightsMap);
  }, [props.statKeys]);

  const calculate = useCallback(() => {
    props.onCalculate(calculatePowerRankings(props.stats!, statWeightsMap));
  }, [props, statWeightsMap]);

  return (
    <>
      <div className={classes.inputs}>
        {props.statKeys.map((statKey) => {
          return (
            <RankingGenerationInput
              key={statKey}
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
      </div>
      <button onClick={calculate} disabled={props.disabled} className={classes.button}>
        Generate Power Rankings
      </button>
    </>
  );
};
