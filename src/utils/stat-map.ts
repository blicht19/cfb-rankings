import { StatDetails } from '../types';

export const statMap: Record<string, StatDetails> = {
  offensivePPA: {
    name: 'PPA',
    positive: true,
  },
  offensiveExplosiveness: {
    name: 'Explosiveness',
    positive: true,
  },
  offensivePowerSuccess: {
    name: 'Power Success',
    positive: true,
  },
  offensiveStuffRate: {
    name: 'Offensive Stuff Rate',
    positive: false,
  },
  offensiveLineYards: {
    name: 'Line Yards',
    positive: true,
  },
  offensiveSecondLevelYards: {
    name: 'Second Level Yards',
    positive: true,
  },
  offensiveOpenFieldYards: {
    name: 'Open Field Yards',
    positive: true,
  },
  offensivePointsPerOpportunity: {
    name: 'Points Per Opportunity',
    positive: true,
  },
  offensiveHavoc: {
    name: 'Offensive Havoc Rate',
    positive: false,
  },
  offensiveRushingPPA: {
    name: 'Rushing PPA',
    positive: true,
  },
  offensiveRushingSuccessRate: {
    name: 'Rushing Success Rate',
    positive: true,
  },
  offensiveRushingExplosiveness: {
    name: 'Rushing Explosiveness',
    positive: true,
  },
  offensivePassingPPA: {
    name: 'Passing PPA',
    positive: true,
  },
  offensivePassingSuccessRate: {
    name: 'Passing Success Rate',
    positive: true,
  },
  offensivePassingExplosiveness: {
    name: 'Passing Explosiveness',
    positive: true,
  },
  defensivePPA: {
    name: 'PPA Allowd',
    positive: false,
  },
  defensiveSuccessRate: {
    name: 'Success Rate Allowed',
    positive: false,
  },
  defensiveExplosiveness: {
    name: 'Explosiveness Allowed',
    positive: false,
  },
  defensivePowerSuccess: {
    name: 'Power Success Allowed',
    positive: false,
  },
  defensiveStuffRate: {
    name: 'Defensive Stuff Rate',
    positive: true,
  },
  defensiveLineYards: {
    name: 'Line Yards Allowed',
    positive: false,
  },
  defensiveSecondLevelYards: {
    name: 'Second Level Yards Allowd',
    positive: false,
  },
  defensiveOpenFieldYards: {
    name: 'Open Field Yards Allowed',
    positive: false,
  },
  defensivePointsPerOpportunity: {
    name: 'Points Per Opportunity Allowed',
    positive: false,
  },
  defensiveHavoc: {
    name: 'Defensive Havoc Rate',
    positive: true,
  },
  defensiveRushingPPA: {
    name: 'Rushing PPA Allowed',
    positive: false,
  },
  defensiveRushingSuccessRate: {
    name: 'Rushing Success Rate Allowed',
    positive: false,
  },
  defensiveRushingExplosiveness: {
    name: 'Rushing Explosiveness Allowed',
    positive: false,
  },
  defensivePassingPPA: {
    name: 'Passing PPA Allowed',
    positive: false,
  },
  defensivePassingSuccessRate: {
    name: 'Passing Success Rate Allowed',
    positive: false,
  },
  defensivePassingExplosiveness: {
    name: 'Passing Explosiveness Allowed',
    positive: false,
  },
};
