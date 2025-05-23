'use client';

import { ReactNode } from 'react';

import { Box, LinearProgress } from '@mui/material';

interface LoaderPageProps {
  children: ReactNode;
  isLoading: boolean;
}

export const LoaderPage = ({ children, isLoading }: LoaderPageProps) => {
  if (isLoading) {
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          width: '100%',
        }}
      >
        <LinearProgress
          color='success'
          sx={{
            height: 5,
            width: '50%',
          }}
        />
        <Box sx={{ mt: 2 }}>Загрузка...</Box>
      </Box>
    );
  }

  return <>{children}</>;
};
