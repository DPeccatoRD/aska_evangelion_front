import { useEffect, useState } from 'react';

import { usePathname } from 'next/navigation';

import { User } from 'shared/api/usersApi';
import { getToken, parseJwt } from 'shared/lib/utils/auth';
import { logger } from 'shared/lib/utils/logger';
import { useAppDispatch } from 'shared/store';
import { logout, setAuth } from 'shared/store/slices/authSlice';
import { clearCurrentUser, setCurrentUser } from 'shared/store/slices/userSlice';

export const useInitialApp = () => {
  const dispatch = useAppDispatch();
  const [isLoaded, setLoad] = useState(false);
  const path = usePathname();

  const accessToken = getToken();
  const isAuth = !path.match(/\b(auth|login-auth2)\b/);

  useEffect(() => {
    // Обработчик для инициализации приложения
    const init = async () => {
      try {
        if (accessToken) {
          const jwtData = parseJwt(accessToken);

          if (jwtData) {
            const { roles, sub, email, firstName, lastName } = jwtData;

            // Создаем объект, соответствующий интерфейсу User
            const user: User = {
              id: Number(sub) || 0,
              email,
              firstName,
              lastName,
              banned: false,
              banReason: null,
            };

            // Обновляем информацию в auth слайсе
            dispatch(setAuth({ email, firstName, lastName }));

            // Обновляем информацию в user слайсе
            dispatch(setCurrentUser(user));

            // Сохраняем контекст пользователя в localStorage
            const userContext = {
              user,
              token: { accessToken },
              roles,
            };
            localStorage.setItem('userContext', JSON.stringify(userContext));
          }
        } else {
          // Если токен отсутствует, очищаем данные
          dispatch(clearCurrentUser());
          dispatch(logout());
          localStorage.removeItem('userContext');
        }
      } catch (error) {
        logger.error('Ошибка при инициализации приложения:', error);
        // Очищаем данные в случае ошибки
        dispatch(clearCurrentUser());
        dispatch(logout());
        localStorage.removeItem('userContext');
      } finally {
        setLoad(true);
      }
    };

    // Немедленно вызываем функцию и явно обрабатываем Promise
    void init();
  }, [accessToken, dispatch]);

  return { isLoaded, isAuth };
};
