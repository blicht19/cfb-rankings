export interface RankingGenerationInputProps {
  title: string;
  checked: boolean;
  weight: number;
  onCheckedChange: () => void;
  onSliderChange: (newValue: number) => void;
}
