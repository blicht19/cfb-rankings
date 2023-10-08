import { useAdvancedStats } from '../../hooks';
import { RankingGenerationInput } from '../ranking-generation-input';
import { StatsTable } from '../stats-table';

export const Rankings = (): React.JSX.Element => {
  const { isLoading, data } = useAdvancedStats(true);

  return (
    <>
      {isLoading && 'Loading...'}
      {!isLoading && <StatsTable title="Team Stats" rows={data} />}
    </>
  );
};
