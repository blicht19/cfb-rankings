import { type TableColumn } from 'react-data-table-component';
import { type TeamAdvancedStats } from '../../types';
import { statMap } from '../../utils';

export const columns: TableColumn<TeamAdvancedStats>[] = [
  {
    name: 'Team Name',
    selector: (row: TeamAdvancedStats) => row.teamName,
    sortable: true,
  },
  {
    name: statMap.offensivePPA.name,
    selector: (row: TeamAdvancedStats) => row.offensivePPA,
    sortable: true,
    reorder: true,
    sortFunction: (a: TeamAdvancedStats, b: TeamAdvancedStats) => {
      return b.offensivePPA - a.offensivePPA;
    },
  },
  {
    name: statMap.offensiveExplosiveness.name,
    selector: (row: TeamAdvancedStats) => row.offensiveExplosiveness,
    sortable: true,
    reorder: true,
    sortFunction: (a: TeamAdvancedStats, b: TeamAdvancedStats) => {
      return b.offensiveExplosiveness - a.offensiveExplosiveness;
    },
  },
  {
    name: statMap.offensivePowerSuccess.name,
    selector: (row: TeamAdvancedStats) => row.offensivePowerSuccess,
    sortable: true,
    reorder: true,
    sortFunction: (a: TeamAdvancedStats, b: TeamAdvancedStats) => {
      return b.offensivePowerSuccess - a.offensivePowerSuccess;
    },
  },
  {
    name: statMap.offensiveStuffRate.name,
    selector: (row: TeamAdvancedStats) => row.offensiveStuffRate,
    sortable: true,
    reorder: true,
    sortFunction: (a: TeamAdvancedStats, b: TeamAdvancedStats) => {
      return a.offensiveStuffRate - b.offensiveStuffRate;
    },
  },
  {
    name: statMap.offensiveLineYards.name,
    selector: (row: TeamAdvancedStats) => row.offensiveLineYards,
    sortable: true,
    reorder: true,
    sortFunction: (a: TeamAdvancedStats, b: TeamAdvancedStats) => {
      return b.offensiveLineYards - a.offensiveLineYards;
    },
  },
  {
    name: statMap.offensiveSecondLevelYards.name,
    selector: (row: TeamAdvancedStats) => row.offensiveSecondLevelYards,
    sortable: true,
    reorder: true,
    sortFunction: (a: TeamAdvancedStats, b: TeamAdvancedStats) => {
      return b.offensiveSecondLevelYards - a.offensiveSecondLevelYards;
    },
  },
  {
    name: statMap.offensiveOpenFieldYards.name,
    selector: (row: TeamAdvancedStats) => row.offensiveOpenFieldYards,
    sortable: true,
    reorder: true,
    sortFunction: (a: TeamAdvancedStats, b: TeamAdvancedStats) => {
      return b.offensiveOpenFieldYards - a.offensiveOpenFieldYards;
    },
  },
  {
    name: statMap.offensivePointsPerOpportunity.name,
    selector: (row: TeamAdvancedStats) => row.offensivePointsPerOpportunity,
    sortable: true,
    reorder: true,
    sortFunction: (a: TeamAdvancedStats, b: TeamAdvancedStats) => {
      return b.offensivePointsPerOpportunity - a.offensivePointsPerOpportunity;
    },
  },
  {
    name: statMap.offensiveHavoc.name,
    selector: (row: TeamAdvancedStats) => row.offensiveHavoc,
    sortable: true,
    reorder: true,
    sortFunction: (a: TeamAdvancedStats, b: TeamAdvancedStats) => {
      return a.offensiveHavoc - b.offensiveHavoc;
    },
  },
  {
    name: statMap.offensiveRushingPPA.name,
    selector: (row: TeamAdvancedStats) => row.offensiveRushingPPA,
    sortable: true,
    reorder: true,
    sortFunction: (a: TeamAdvancedStats, b: TeamAdvancedStats) => {
      return b.offensiveRushingPPA - a.offensiveRushingPPA;
    },
  },
  {
    name: statMap.offensiveRushingSuccessRate.name,
    selector: (row: TeamAdvancedStats) => row.offensiveRushingSuccessRate,
    sortable: true,
    reorder: true,
    sortFunction: (a: TeamAdvancedStats, b: TeamAdvancedStats) => {
      return b.offensiveRushingSuccessRate - a.offensiveRushingSuccessRate;
    },
  },
  {
    name: statMap.offensiveRushingExplosiveness.name,
    selector: (row: TeamAdvancedStats) => row.offensiveRushingExplosiveness,
    sortable: true,
    reorder: true,
    sortFunction: (a: TeamAdvancedStats, b: TeamAdvancedStats) => {
      return b.offensiveRushingExplosiveness - a.offensiveRushingExplosiveness;
    },
  },
  {
    name: statMap.offensivePassingPPA.name,
    selector: (row: TeamAdvancedStats) => row.offensivePassingPPA,
    sortable: true,
    reorder: true,
    sortFunction: (a: TeamAdvancedStats, b: TeamAdvancedStats) => {
      return b.offensivePassingPPA - a.offensivePassingPPA;
    },
  },
  {
    name: statMap.offensivePassingSuccessRate.name,
    selector: (row: TeamAdvancedStats) => row.offensivePassingSuccessRate,
    sortable: true,
    reorder: true,
    sortFunction: (a: TeamAdvancedStats, b: TeamAdvancedStats) => {
      return b.offensivePassingSuccessRate - a.offensivePassingSuccessRate;
    },
  },
  {
    name: statMap.offensivePassingExplosiveness.name,
    selector: (row: TeamAdvancedStats) => row.offensivePassingExplosiveness,
    sortable: true,
    reorder: true,
    sortFunction: (a: TeamAdvancedStats, b: TeamAdvancedStats) => {
      return b.offensivePassingExplosiveness - a.offensivePassingExplosiveness;
    },
  },
  {
    name: statMap.defensivePPA.name,
    selector: (row: TeamAdvancedStats) => row.defensivePPA,
    sortable: true,
    reorder: true,
    sortFunction: (a: TeamAdvancedStats, b: TeamAdvancedStats) => {
      return a.defensivePPA - b.defensivePPA;
    },
  },
  {
    name: statMap.defensiveSuccessRate.name,
    selector: (row: TeamAdvancedStats) => row.defensiveSuccessRate,
    sortable: true,
    reorder: true,
    sortFunction: (a: TeamAdvancedStats, b: TeamAdvancedStats) => {
      return a.defensiveSuccessRate - b.defensiveSuccessRate;
    },
  },
  {
    name: statMap.defensiveExplosiveness.name,
    selector: (row: TeamAdvancedStats) => row.defensiveExplosiveness,
    sortable: true,
    reorder: true,
    sortFunction: (a: TeamAdvancedStats, b: TeamAdvancedStats) => {
      return a.defensiveExplosiveness - b.defensiveExplosiveness;
    },
  },
  {
    name: statMap.defensivePowerSuccess.name,
    selector: (row: TeamAdvancedStats) => row.defensivePowerSuccess,
    sortable: true,
    reorder: true,
    sortFunction: (a: TeamAdvancedStats, b: TeamAdvancedStats) => {
      return a.defensivePowerSuccess - b.defensivePowerSuccess;
    },
  },
  {
    name: statMap.defensiveStuffRate.name,
    selector: (row: TeamAdvancedStats) => row.defensiveStuffRate,
    sortable: true,
    reorder: true,
    sortFunction: (a: TeamAdvancedStats, b: TeamAdvancedStats) => {
      return b.defensiveStuffRate - a.defensiveStuffRate;
    },
  },
  {
    name: statMap.defensiveLineYards.name,
    selector: (row: TeamAdvancedStats) => row.defensiveLineYards,
    sortable: true,
    reorder: true,
    sortFunction: (a: TeamAdvancedStats, b: TeamAdvancedStats) => {
      return a.defensiveLineYards - b.defensiveLineYards;
    },
  },
  {
    name: statMap.defensiveSecondLevelYards.name,
    selector: (row: TeamAdvancedStats) => row.defensiveSecondLevelYards,
    sortable: true,
    reorder: true,
    sortFunction: (a: TeamAdvancedStats, b: TeamAdvancedStats) => {
      return a.defensiveSecondLevelYards - b.defensiveSecondLevelYards;
    },
  },
  {
    name: statMap.defensiveOpenFieldYards.name,
    selector: (row: TeamAdvancedStats) => row.defensiveOpenFieldYards,
    sortable: true,
    reorder: true,
    sortFunction: (a: TeamAdvancedStats, b: TeamAdvancedStats) => {
      return a.defensiveOpenFieldYards - b.defensiveOpenFieldYards;
    },
  },
  {
    name: statMap.defensivePointsPerOpportunity.name,
    selector: (row: TeamAdvancedStats) => row.defensivePointsPerOpportunity,
    sortable: true,
    reorder: true,
    sortFunction: (a: TeamAdvancedStats, b: TeamAdvancedStats) => {
      return a.defensivePointsPerOpportunity - b.defensivePointsPerOpportunity;
    },
  },
  {
    name: statMap.defensiveHavoc.name,
    selector: (row: TeamAdvancedStats) => row.defensiveHavoc,
    sortable: true,
    reorder: true,
    sortFunction: (a: TeamAdvancedStats, b: TeamAdvancedStats) => {
      return b.defensiveHavoc - a.defensiveHavoc;
    },
  },
  {
    name: statMap.defensiveRushingPPA.name,
    selector: (row: TeamAdvancedStats) => row.defensiveRushingPPA,
    sortable: true,
    reorder: true,
    sortFunction: (a: TeamAdvancedStats, b: TeamAdvancedStats) => {
      return a.defensiveRushingPPA - b.defensiveRushingPPA;
    },
  },
  {
    name: statMap.defensiveRushingSuccessRate.name,
    selector: (row: TeamAdvancedStats) => row.defensiveRushingSuccessRate,
    sortable: true,
    reorder: true,
    sortFunction: (a: TeamAdvancedStats, b: TeamAdvancedStats) => {
      return a.defensiveRushingSuccessRate - b.defensiveRushingSuccessRate;
    },
  },
  {
    name: statMap.defensiveRushingExplosiveness.name,
    selector: (row: TeamAdvancedStats) => row.defensiveRushingExplosiveness,
    sortable: true,
    reorder: true,
    sortFunction: (a: TeamAdvancedStats, b: TeamAdvancedStats) => {
      return a.defensiveRushingExplosiveness - b.defensiveRushingExplosiveness;
    },
  },
  {
    name: statMap.defensivePassingPPA.name,
    selector: (row: TeamAdvancedStats) => row.defensivePassingPPA,
    sortable: true,
    reorder: true,
    sortFunction: (a: TeamAdvancedStats, b: TeamAdvancedStats) => {
      return a.defensivePassingPPA - b.defensivePassingPPA;
    },
  },
  {
    name: statMap.defensivePassingSuccessRate.name,
    selector: (row: TeamAdvancedStats) => row.defensivePassingSuccessRate,
    sortable: true,
    reorder: true,
    sortFunction: (a: TeamAdvancedStats, b: TeamAdvancedStats) => {
      return a.defensivePassingSuccessRate - b.defensivePassingSuccessRate;
    },
  },
  {
    name: statMap.defensivePassingExplosiveness.name,
    selector: (row: TeamAdvancedStats) => row.defensivePassingExplosiveness,
    sortable: true,
    reorder: true,
    sortFunction: (a: TeamAdvancedStats, b: TeamAdvancedStats) => {
      return a.defensivePassingExplosiveness - b.defensivePassingExplosiveness;
    },
  },
  {
    name: 'Power Ranking Score',
    selector: (row: TeamAdvancedStats) => row.powerRankingScore ?? 0,
    sortable: true,
    reorder: true,
    sortFunction: (a: TeamAdvancedStats, b: TeamAdvancedStats) => {
      return b.powerRankingScore! - a.powerRankingScore!;
    },
  },
];
