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
