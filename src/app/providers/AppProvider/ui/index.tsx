'use client';

import { ReactNode } from 'react';

import { ThemeProvider } from 'next-themes';

import { useInitialApp } from '@/app/providers/AppProvider/model/useInitialApp';
import { LoaderPage } from '@/app/providers/AppProvider/ui/LoaderPage';
import { PageProvider } from '@/app/providers/PageProvider';

import { Display } from '@/shared/ui';
import { ErrorBoundary } from '@/shared/ui';
import { ErrorFallback } from "@/shared/ui";

import styles from './AppProvider.module.css';

interface AppProviderProps {
    children: ReactNode;
    isLegacyLink?: boolean;
}

const AppProvider = ({ children }: AppProviderProps) => {
    const { isLoaded, isAuth } = useInitialApp();

    return (
        <main className={styles.main}>
            <ThemeProvider
                attribute="data-theme"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >
                <ErrorBoundary
                    fallback={(error, resetError) => (
                        <ErrorFallback error={error} resetError={resetError} />
                    )}
                >
                <Display conditional match={isLoaded}>
                        <Display conditional match={isAuth}>
                            <PageProvider>{children}</PageProvider>
                            <LoaderPage>{children}</LoaderPage>
                        </Display>
                        <LoaderPage isLoading={!isLoaded} />
                    </Display>
                </ErrorBoundary>
            </ThemeProvider>
        </main>
    );
};

export { AppProvider };