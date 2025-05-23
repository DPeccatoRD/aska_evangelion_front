import React, { Component, ErrorInfo, ReactNode } from 'react';

import { logger } from 'shared/lib';

interface Props {
  children: ReactNode;
  fallback?: ReactNode | ((error: Error, resetError: () => void) => ReactNode);
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // Можно логировать ошибку в аналитику или консоль
    logger.error('Ошибка отловлена ErrorBoundary:', error);

    // Вызываем обработчик ошибок, если он был передан
    const { onError } = this.props;

    if (onError) {
      onError(error, errorInfo);
    }
  }

  resetError = (): void => {
    this.setState({ hasError: false, error: null });
  };

  render(): ReactNode {
    const { hasError, error } = this.state;
    const { children, fallback } = this.props;

    if (hasError && error) {
      // Если передан fallback как компонент
      if (fallback && typeof fallback !== 'function') {
        return fallback;
      }

      // Если передан fallback как функция
      if (fallback && typeof fallback === 'function') {
        return fallback(error, this.resetError);
      }

      // Стандартный компонент отображения ошибки
      return (
        <div className='error-boundary'>
          <h2>Что-то пошло не так</h2>
          <details>
            <summary>Подробности ошибки</summary>
            <p>{error.toString()}</p>
          </details>
          <button onClick={this.resetError}>Попробовать снова</button>
        </div>
      );
    }

    return children;
  }
}
