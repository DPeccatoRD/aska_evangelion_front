import React from 'react';

interface ErrorFallbackProps {
    error: Error;
    resetError: () => void;
}

export const ErrorFallback = ({ error, resetError }: ErrorFallbackProps) => {
    return (
        <div className="error-fallback">
            <h2>Упс! Что-то пошло не так</h2>
            <p>Произошла ошибка при отображении этого компонента</p>
            <details>
                <summary>Технические детали</summary>
                <pre>{error.message}</pre>
                <pre>{error.stack}</pre>
            </details>
            <button onClick={resetError}>
                Попробовать снова
            </button>
        </div>
    );
};