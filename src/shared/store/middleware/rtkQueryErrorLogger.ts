import { isRejectedWithValue } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import type { Middleware } from '@reduxjs/toolkit';

const rtkQueryErrorLogger: Middleware = () => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    // Проверяем, что payload существует и имеет свойство data
    if (action.payload && typeof action.payload === 'object' && 'data' in action.payload) {
      // Теперь TypeScript знает, что data существует
      const payload = action.payload as { data: { message: string } };
      toast.error(payload.data.message);

      return next(action);
    }

    if (action.error && action.error.message === 'Rejected') {
      toast.error('Ошибка в отправке запроса');

      return next(action);
    }

    if (action.error?.message) {
      toast.error(action.error.message);
    }
  }

  return next(action);
};

export { rtkQueryErrorLogger };
