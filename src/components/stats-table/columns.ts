import { type TableColumn } from 'react-data-table-component';
import { type TeamAdvancedStats } from '../../types';

export const columns: TableColumn<TeamAdvancedStats>[] = [
  {
    name: 'Team Name',
    selector: (row: TeamAdvancedStats) => row.teamName,
    sortable: true,
  },
  {
    name: 'PPA',
    selector: (row: TeamAdvancedStats) => row.offensivePPA,
    sortable: true,
    sortFunction: (a: TeamAdvancedStats, b: TeamAdvancedStats) => {
      return b.offensivePPA - a.offensivePPA;
    },
  },
  {
    name: 'Explosiveness',
    selector: (row: TeamAdvancedStats) => row.offensiveExplosiveness,
    sortable: true,
    sortFunction: (a: TeamAdvancedStats, b: TeamAdvancedStats) => {
      return b.offensiveExplosiveness - a.defensiveExplosiveness;
    },
  },
  {
    name: 'Power Success',
    selector: (row: TeamAdvancedStats) => row.offensivePowerSuccess,
    sortable: true,
    sortFunction: (a: TeamAdvancedStats, b: TeamAdvancedStats) => {
      return b.offensivePowerSuccess - a.offensivePowerSuccess;
    },
  },
  {
    name: 'Offense Stuff Rate',
    selector: (row: TeamAdvancedStats) => row.offensiveStuffRate,
    sortable: true,
    sortFunction: (a: TeamAdvancedStats, b: TeamAdvancedStats) => {
      return a.offensiveStuffRate - b.offensiveStuffRate;
    },
  },
  {
    name: 'Line Yards',
    selector: (row: TeamAdvancedStats) => row.offensiveLineYards,
    sortable: true,
    sortFunction: (a: TeamAdvancedStats, b: TeamAdvancedStats) => {
      return b.offensiveLineYards - a.offensiveLineYards;
    },
  },
  {
    name: 'Second Level Yards',
    selector: (row: TeamAdvancedStats) => row.offensiveSecondLevelYards,
    sortable: true,
    sortFunction: (a: TeamAdvancedStats, b: TeamAdvancedStats) => {
      return b.offensiveSecondLevelYards - a.offensiveSecondLevelYards;
    },
  },
  {
    name: 'Open Field Yards',
    selector: (row: TeamAdvancedStats) => row.offensiveOpenFieldYards,
    sortable: true,
    sortFunction: (a: TeamAdvancedStats, b: TeamAdvancedStats) => {
      return b.offensiveOpenFieldYards - a.offensiveOpenFieldYards;
    },
  },
  {
    name: 'Points Per Opportunity',
    selector: (row: TeamAdvancedStats) => row.offensivePointsPerOpportunity,
    sortable: true,
    sortFunction: (a: TeamAdvancedStats, b: TeamAdvancedStats) => {
      return b.offensivePointsPerOpportunity - a.offensivePointsPerOpportunity;
    },
  },
  {
    name: 'Offense Havoc Rate',
    selector: (row: TeamAdvancedStats) => row.offensiveHavoc,
    sortable: true,
    sortFunction: (a: TeamAdvancedStats, b: TeamAdvancedStats) => {
      return a.offensiveHavoc - b.offensiveHavoc;
    },
  },
  {
    name: 'Rushing PPA',
    selector: (row: TeamAdvancedStats) => row.offensiveRushingPPA,
    sortable: true,
    sortFunction: (a: TeamAdvancedStats, b: TeamAdvancedStats) => {
      return b.offensiveRushingPPA - a.offensiveRushingPPA;
    },
  },
  {
    name: 'Rushing Success Rate',
    selector: (row: TeamAdvancedStats) => row.offensiveRushingSuccessRate,
    sortable: true,
    sortFunction: (a: TeamAdvancedStats, b: TeamAdvancedStats) => {
      return b.offensiveRushingSuccessRate - a.offensiveRushingSuccessRate;
    },
  },
  {
    name: 'Rushing Explosiveness',
    selector: (row: TeamAdvancedStats) => row.offensiveRushingExplosiveness,
    sortable: true,
    sortFunction: (a: TeamAdvancedStats, b: TeamAdvancedStats) => {
      return b.offensiveExplosiveness - a.offensiveRushingExplosiveness;
    },
  },
  {
    name: 'Passing PPA',
    selector: (row: TeamAdvancedStats) => row.offensivePassingPPA,
    sortable: true,
    sortFunction: (a: TeamAdvancedStats, b: TeamAdvancedStats) => {
      return b.offensivePassingPPA - a.offensivePassingPPA;
    },
  },
  {
    name: 'Passing Success Rate',
    selector: (row: TeamAdvancedStats) => row.offensivePassingSuccessRate,
    sortable: true,
    sortFunction: (a: TeamAdvancedStats, b: TeamAdvancedStats) => {
      return b.offensivePassingSuccessRate - a.offensivePassingSuccessRate;
    },
  },
  {
    name: 'Passing Explosiveness',
    selector: (row: TeamAdvancedStats) => row.offensivePassingExplosiveness,
    sortable: true,
    sortFunction: (a: TeamAdvancedStats, b: TeamAdvancedStats) => {
      return b.offensivePassingSuccessRate - a.offensivePassingSuccessRate;
    },
  },
  {
    name: 'PPA Allowed',
    selector: (row: TeamAdvancedStats) => row.defensivePPA,
    sortable: true,
    sortFunction: (a: TeamAdvancedStats, b: TeamAdvancedStats) => {
      return a.defensivePPA - b.defensivePPA;
    },
  },
  {
    name: 'Success Rate Allowed',
    selector: (row: TeamAdvancedStats) => row.defensiveSuccessRate,
    sortable: true,
    sortFunction: (a: TeamAdvancedStats, b: TeamAdvancedStats) => {
      return a.defensiveSuccessRate - b.defensiveSuccessRate;
    },
  },
  {
    name: 'Explosiveness Allowed',
    selector: (row: TeamAdvancedStats) => row.defensiveExplosiveness,
    sortable: true,
    sortFunction: (a: TeamAdvancedStats, b: TeamAdvancedStats) => {
      return a.defensiveExplosiveness - b.defensiveExplosiveness;
    },
  },
  {
    name: 'Power Success Allowed',
    selector: (row: TeamAdvancedStats) => row.defensivePowerSuccess,
    sortable: true,
    sortFunction: (a: TeamAdvancedStats, b: TeamAdvancedStats) => {
      return a.defensivePowerSuccess - b.defensivePowerSuccess;
    },
  },
  {
    name: 'Defense Stuff Rate',
    selector: (row: TeamAdvancedStats) => row.defensiveStuffRate,
    sortable: true,
    sortFunction: (a: TeamAdvancedStats, b: TeamAdvancedStats) => {
      return b.defensiveStuffRate - a.defensiveStuffRate;
    },
  },
  {
    name: 'Line Yards Allowed',
    selector: (row: TeamAdvancedStats) => row.defensiveLineYards,
    sortable: true,
    sortFunction: (a: TeamAdvancedStats, b: TeamAdvancedStats) => {
      return a.defensiveLineYards - b.defensiveLineYards;
    },
  },
  {
    name: 'Second Level Yards Allowed',
    selector: (row: TeamAdvancedStats) => row.defensiveSecondLevelYards,
    sortable: true,
    sortFunction: (a: TeamAdvancedStats, b: TeamAdvancedStats) => {
      return a.defensiveSecondLevelYards - b.defensiveSecondLevelYards;
    },
  },
  {
    name: 'Open Field Yards Allowed',
    selector: (row: TeamAdvancedStats) => row.defensiveOpenFieldYards,
    sortable: true,
    sortFunction: (a: TeamAdvancedStats, b: TeamAdvancedStats) => {
      return a.defensiveOpenFieldYards - b.defensiveOpenFieldYards;
    },
  },
  {
    name: 'Points Per Opportunity Allowed',
    selector: (row: TeamAdvancedStats) => row.defensivePointsPerOpportunity,
    sortable: true,
    sortFunction: (a: TeamAdvancedStats, b: TeamAdvancedStats) => {
      return a.defensivePointsPerOpportunity - b.defensivePointsPerOpportunity;
    },
  },
  {
    name: 'Defense Havoc Rate',
    selector: (row: TeamAdvancedStats) => row.defensiveHavoc,
    sortable: true,
    sortFunction: (a: TeamAdvancedStats, b: TeamAdvancedStats) => {
      return b.defensiveHavoc - a.defensiveHavoc;
    },
  },
  {
    name: 'Rushing PPA Allowed',
    selector: (row: TeamAdvancedStats) => row.defensiveRushingPPA,
    sortable: true,
    sortFunction: (a: TeamAdvancedStats, b: TeamAdvancedStats) => {
      return a.defensiveRushingPPA - b.defensiveRushingPPA;
    },
  },
  {
    name: 'Rushing Success Rate Allowed',
    selector: (row: TeamAdvancedStats) => row.defensiveRushingSuccessRate,
    sortable: true,
    sortFunction: (a: TeamAdvancedStats, b: TeamAdvancedStats) => {
      return a.defensiveRushingSuccessRate - b.defensiveRushingSuccessRate;
    },
  },
  {
    name: 'Rushing Explosiveness Allowed',
    selector: (row: TeamAdvancedStats) => row.defensiveRushingExplosiveness,
    sortable: true,
    sortFunction: (a: TeamAdvancedStats, b: TeamAdvancedStats) => {
      return a.defensiveRushingExplosiveness - b.defensiveRushingExplosiveness;
    },
  },
  {
    name: 'Passing PPA Allowed',
    selector: (row: TeamAdvancedStats) => row.defensivePassingPPA,
    sortable: true,
    sortFunction: (a: TeamAdvancedStats, b: TeamAdvancedStats) => {
      return a.defensivePassingPPA - b.defensivePassingPPA;
    },
  },
  {
    name: 'Passing Success Rate Allowed',
    selector: (row: TeamAdvancedStats) => row.defensivePassingSuccessRate,
    sortable: true,
    sortFunction: (a: TeamAdvancedStats, b: TeamAdvancedStats) => {
      return a.defensivePassingSuccessRate - b.defensivePassingSuccessRate;
    },
  },
  {
    name: 'Passing Explosiveness Allowed',
    selector: (row: TeamAdvancedStats) => row.defensivePassingExplosiveness,
    sortable: true,
    sortFunction: (a: TeamAdvancedStats, b: TeamAdvancedStats) => {
      return a.defensivePassingExplosiveness - b.defensivePassingExplosiveness;
    },
  },
];
