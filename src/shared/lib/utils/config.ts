interface Environment {
  API_URL: string;
  // Можно добавить другие настройки по мере необходимости
}

// Различные конфигурации по окружениям
const devEnv: Environment = {
  API_URL: process.env.NEXT_PUBLIC_API_URL_DEV || 'http://localhost:5000',
};

const prodEnv: Environment = {
  API_URL: process.env.NEXT_PUBLIC_API_URL_PROD || 'https://api-prod.example.com',
};

// Карта доменов для определения окружения
const configPath = {
  DEVELOP: 'localhost',
  PROD: 'example.com',
};

// Значение по умолчанию
const DEFAULT_ENVIRONMENT = 'DEVELOP';

// Функция для создания конфигурации
const createConfig = ({ devEnv, prodEnv }: { devEnv: Environment; prodEnv: Environment }) => ({
  [configPath.DEVELOP]: devEnv,
  [configPath.PROD]: prodEnv,
});

// Получение текущей конфигурации
export const getConfig = (): Environment => {
  // Определяем текущий хост
  const hostname = typeof window !== 'undefined' ? window.location.hostname : '';

  const config = createConfig({ devEnv, prodEnv });

  // Определяем окружение по хосту
  const environmentKey =
    Object.keys(configPath).find((key) =>
      hostname.includes(configPath[key as keyof typeof configPath]),
    ) || DEFAULT_ENVIRONMENT;

  // Возвращаем соответствующую конфигурацию
  return config[configPath[environmentKey as keyof typeof configPath]] || devEnv;
};

// Для удобства экспортируем текущую конфигурацию
export const config = getConfig();
