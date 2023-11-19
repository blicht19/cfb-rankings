import { type RankingGenerationInputProps } from './ranking-generation-input.types';
import classes from './ranking-generation-input.module.css';

export const RankingGenerationInput = (props: RankingGenerationInputProps): React.JSX.Element => {
  return (
    <div className={classes['ranking-input']}>
      <h3>{props.title}</h3>
      <div className={classes.include}>
        <p>Include?</p>
        <input
          type="checkbox"
          checked={props.checked}
          onChange={props.onCheckedChange}
          className={classes['styled-checkbox']}
        />
      </div>
      <div>
        <p>Weight: {props.checked && props.weight}</p>
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
