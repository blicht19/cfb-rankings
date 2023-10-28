import axios from 'axios';
import { useQuery } from 'react-query';
import { TeamAdvancedStats } from '../types';
import { queryClient } from '../utils';

export const useAdvancedStats = (
  excludeGarbage: boolean,
): {
  isLoading: boolean;
  isError: boolean;
  data: TeamAdvancedStats[];
  error: unknown;
  invalidate: () => void;
} => {
  const key = 'stats' + excludeGarbage ? '-no-garbage' : '';
  const { isLoading, isError, data, error } = useQuery(
    [key],
    async () => {
      const response = await axios.get(
        'http://localhost:3000/api/advanced-stats?excludeGarbageTime=true',
      );
      return response.data;
    },
    {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: 1000 * 60 * 60 * 24, // 24 hours
    },
  );

  const invalidate = () => {
    queryClient.invalidateQueries(key);
  };

  return { isLoading, isError, data, error, invalidate };
};
