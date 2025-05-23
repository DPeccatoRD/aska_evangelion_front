'use client';

import { ReactNode, useEffect, useState } from 'react';

import { Box } from '@mui/material';
import { useTheme } from 'next-themes';
import { ToastContainer } from 'react-toastify';

import { Display, ErrorBoundary, ErrorFallback } from 'shared/ui';

import { useInitialApp } from '../model/useInitialApp';

import { LoaderPage } from './LoaderPage';

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  const [mounted, setMounted] = useState(false);
  const { isAuth, isLoaded } = useInitialApp();
  const { resolvedTheme } = useTheme();

  // Важно: этот эффект предотвращает проблемы с гидратацией
  useEffect(() => {
    setMounted(true);
  }, []);

  // Возвращаем пустой div во время SSR, чтобы избежать гидратации
  if (!mounted) {
    return <div style={{ visibility: 'hidden' }} />;
  }

  return (
    <Box component='main'>
      <ErrorBoundary
        fallback={(error, resetError) => <ErrorFallback error={error} resetError={resetError} />}
      >
        <LoaderPage isLoading={!isLoaded}>
          <Display conditional match={isLoaded && isAuth}>
            {children}
          </Display>
        </LoaderPage>
      </ErrorBoundary>
      <ToastContainer
        autoClose={5000}
        closeOnClick
        draggable
        hideProgressBar={false}
        newestOnTop
        pauseOnFocusLoss
        pauseOnHover
        position='top-right'
        rtl={false}
        theme={resolvedTheme === 'dark' ? 'dark' : 'light'}
      />
    </Box>
  );
};
