import { TeamAdvancedStats } from '../types';

export const calculatePowerRankings = (stats: TeamAdvancedStats[]): TeamAdvancedStats[] => {
  const statsCopy = structuredClone(stats);
  statsCopy.map((team) => {
    team.powerRankingScore = 1;
  });
  return statsCopy;
};
