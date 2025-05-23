'use client';

import { ReactNode, useEffect, useState } from 'react';

import { ThemeProvider, useTheme } from 'next-themes';
import { Provider as ReduxProvider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import { store } from 'shared/store';

import { AppProvider } from './AppProvider/ui/AppProvider';
import { MuiThemeProvider } from './MuiThemeProvider/MuiThemeProvider';

import 'react-toastify/dist/ReactToastify.css';

interface ProvidersProps {
  children: ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
  const [mounted, setMounted] = useState(false);

  // Предотвращение проблем с гидрацией
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <ReduxProvider store={store}>
      <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
        <MuiThemeProvider>
          <AppProvider>
            {mounted && children}
            <ToastToastify />
          </AppProvider>
        </MuiThemeProvider>
      </ThemeProvider>
    </ReduxProvider>
  );
};

// Выделяем ToastContainer в отдельный компонент для синхронизации с темой
const ToastToastify = () => {
  const { resolvedTheme } = useTheme();

  return (
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
  );
};
