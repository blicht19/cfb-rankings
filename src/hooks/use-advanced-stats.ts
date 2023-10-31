import axios from 'axios';
import { useQuery } from 'react-query';
import { TeamAdvancedStats } from '../types';

export const useAdvancedStats = (
  excludeGarbage: boolean,
): {
  isLoading: boolean;
  isError: boolean;
  data: TeamAdvancedStats[];
  error: unknown;
  key: string;
} => {
  const key = 'stats' + excludeGarbage ? '-no-garbage' : '';
  const { isLoading, isError, data, error } = useQuery(
    [key],
    async () => {
      const response = await axios.get(
        `http://localhost:3000/api/advanced-stats?excludeGarbageTime=${
          excludeGarbage ? 'true' : 'false'
        }`,
      );
      return response.data;
    },
    {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: Infinity,
    },
  );

  return { isLoading, isError, data, error, key };
};
