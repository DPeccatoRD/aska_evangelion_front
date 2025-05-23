import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UiState {
  // Общее состояние загрузки страницы
  pageLoading: boolean;

  // Можно добавить состояния для отдельных секций/компонентов
  modals: {
    [key: string]: boolean; // Открыто/закрыто
  };

  // Состояния уведомлений
  notifications: {
    visible: boolean;
    message: string;
    type: 'success' | 'error' | 'info' | 'warning';
  };

  // Другие UI-состояния по необходимости
}

const initialState: UiState = {
  pageLoading: false,
  modals: {},
  notifications: {
    visible: false,
    message: '',
    type: 'info',
  },
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setPageLoading: (state, action: PayloadAction<boolean>) => {
      state.pageLoading = action.payload;
    },

    setModalState: (state, action: PayloadAction<{ modalId: string; isOpen: boolean }>) => {
      const { modalId, isOpen } = action.payload;
      state.modals[modalId] = isOpen;
    },

    showNotification: (
      state,
      action: PayloadAction<{ message: string; type: UiState['notifications']['type'] }>,
    ) => {
      state.notifications = {
        visible: true,
        message: action.payload.message,
        type: action.payload.type,
      };
    },

    hideNotification: (state) => {
      state.notifications.visible = false;
    },
  },
});

export const { setPageLoading, setModalState, showNotification, hideNotification } =
  uiSlice.actions;
