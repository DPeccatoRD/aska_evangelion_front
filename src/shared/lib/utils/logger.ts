/**
 * Универсальный логгер для приложения
 * Позволяет централизованно управлять логированием и
 * при необходимости интегрироваться с внешними сервисами мониторинга
 */
export const logger = {
  /**
   * Логирование ошибок
   * @param message - сообщение об ошибке
   * @param error - объект ошибки (опционально)
   */
  error: (message: string, error?: unknown) => {
    // В продакшене можно добавить отправку ошибок в сервис мониторинга
    if (process.env.NODE_ENV !== 'production') {
      // eslint-disable-next-line no-console
      console.error(message, error);
    }
  },

  /**
   * Логирование информационных сообщений
   * @param message - информационное сообщение
   * @param data - дополнительные данные (опционально)
   */
  info: (message: string, data?: unknown) => {
    if (process.env.NODE_ENV !== 'production') {
      // eslint-disable-next-line no-console
      console.info(message, data);
    }
  },

  /**
   * Логирование предупреждений
   * @param message - предупреждающее сообщение
   * @param data - дополнительные данные (опционально)
   */
  warn: (message: string, data?: unknown) => {
    if (process.env.NODE_ENV !== 'production') {
      // eslint-disable-next-line no-console
      console.warn(message, data);
    }
  },
};
