import { type RankingGenerationInputProps } from './ranking-generation-input.types';

export const RankingGenerationInput = (props: RankingGenerationInputProps): React.JSX.Element => {
  return (
    <div>
      <h3>{props.title}</h3>
      <div>
        <p>Include</p>
        <input type="checkbox" checked={props.checked} onChange={props.onCheckedChange} />
      </div>
      <div>
        <p>Weight</p>
        <input
          type="range"
          min="1"
          max="10"
          disabled={!props.checked}
          value={props.weight}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            props.onSliderChange(Number(e.target.value));
          }}
        />
      </div>
    </div>
  );
};
