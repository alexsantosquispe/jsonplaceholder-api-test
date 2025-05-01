import { QueryClient } from '@tanstack/react-query';

const MILLISECONDS_IN_SECOND = 1000;
const STALE_TIME_SECONDS = 10;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: MILLISECONDS_IN_SECOND * STALE_TIME_SECONDS
    }
  }
});

export default queryClient;
