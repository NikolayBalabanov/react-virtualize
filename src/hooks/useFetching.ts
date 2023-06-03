import { useState } from 'react';

type TQuery = [limit?: number, page?: number];

export const useFetching = (callback: (args?: TQuery) => Promise<void>) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const fetching = async (args?: TQuery) => {
    try {
      setIsLoading(true);
      await callback(args);
    } catch (e) {
      if (e instanceof Error) setError(e.message);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    error,
    isLoading,
    fetching,
  };
};
