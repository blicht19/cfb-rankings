import { statMap } from '.';
import { StatWeight, TeamAdvancedStats } from '../types';

export const calculatePowerRankings = (
  stats: TeamAdvancedStats[],
  weightMap: Map<string, StatWeight>,
): TeamAdvancedStats[] => {
  const statsCopy = structuredClone(stats);
  const statsArrays = new Map<string, number[]>();
  const weightKeys = weightMap.keys();
  for (const key of weightKeys) {
    if (weightMap.get(key)?.selected) {
      statsArrays.set(key, getSortedStatArray(stats, key));
    }
  }
  const selectedStatsKeys = Array.from(statsArrays.keys());
  statsCopy.map((team) => {
    const selectedTeam = team as unknown as Record<string, number>;
    let score = 0;
    for (const key of selectedStatsKeys) {
      let statScore = percentileRank(statsArrays.get(key)!, selectedTeam[key]);
      statScore *= weightMap.get(key)?.weight ?? 1;
      if (!statMap[key].positive) {
        statScore *= -1;
      }
      score += statScore;
    }
    team.powerRankingScore = score;
  });
  return statsCopy;
};

const getSortedStatArray = (stats: TeamAdvancedStats[], key: string): number[] => {
  const valueArray: number[] = [];
  stats.map((team) => {
    const selectedTeam = team as unknown as Record<string, number>;
    valueArray.push(selectedTeam[key]);
  });
  valueArray.sort((a, b) => {
    return a - b;
  });
  return valueArray;
};

const percentileRank = (arr: number[], v: number): number => {
  for (let i = 0, l = arr.length; i < l; i++) {
    if (v <= arr[i]) {
      while (i < l && v === arr[i]) i++;
      if (i === 0) return 0;
      if (v !== arr[i - 1]) {
        i += (v - arr[i - 1]) / (arr[i] - arr[i - 1]);
      }
      return i / l;
    }
  }
  return 1;
};
