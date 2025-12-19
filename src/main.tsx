import './index.css';

import { ThemeProvider } from '@aes/use-theme-hook';
import { QueryClientProvider } from '@tanstack/react-query';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App.tsx';
import { AlertStack } from './components/atoms/AlertStack/AlertStack.tsx';
import { AlertProvider } from './contexts/AlertProvider.tsx';
import queryClient from './services/queryClient.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider allowSystemTheme={false}>
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true
        }}
      >
        <AlertProvider>
          <QueryClientProvider client={queryClient}>
            <App />
            <AlertStack />
          </QueryClientProvider>
        </AlertProvider>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
