import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';

import { AlertStack } from '../components/atoms/AlertStack/AlertStack';
import { AlertProvider } from '../contexts/AlertProvider';

type ProviderType = {
  children: ReactNode;
};

export const AlertProviderWrapper = ({ children }: ProviderType) => {
  return (
    <AlertProvider>
      <AlertStack />
      {children}
    </AlertProvider>
  );
};

export const QueryClientProviderWrapper = ({ children }: ProviderType) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false
      }
    }
  });

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
