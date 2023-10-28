import { TeamAdvancedStats } from '../../types';

export interface RankingGenerationInputsProps {
  statKeys: string[];
  stats?: TeamAdvancedStats[];
  onCalculate: (newState: TeamAdvancedStats[]) => void;
  disabled?: boolean;
}
