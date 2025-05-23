import { jwtDecode } from 'jwt-decode';

import { logger } from './logger';

interface JwtPayload {
  sub: string;
  email: string;
  roles: string[];
  firstName: string;
  lastName: string;
  iat: number;
  exp: number;
}

export const setToken = (token: string) => {
  localStorage.setItem('token', token);
};

export const getToken = (): string | null => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('token');
  }

  return null;
};

export const removeToken = () => {
  localStorage.removeItem('token');
};

export const parseJwt = (token: string): JwtPayload | null => {
  try {
    return jwtDecode<JwtPayload>(token);
  } catch (e) {
    logger.error('Ошибка при парсинге JWT токена:', e);

    return null;
  }
};

export const isTokenValid = (): boolean => {
  const token = getToken();
  if (!token) return false;

  try {
    const decoded = parseJwt(token);
    if (!decoded) return false;

    // Проверяем срок действия токена
    const currentTime = Date.now() / 1000;

    return decoded.exp > currentTime;
  } catch (e) {
    logger.error('Ошибка при проверке валидности токена:', e);

    return false;
  }
};
