import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  visible: false,
  message: '',
  blacklist: ['notifications'],
};

export const notificationSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    addNotification: (state, action) => {
      state.visible = true;
      state.message = action.payload;
    },
    hideNotification: (state, action) => {
      state.visible = false;
    },
  },
});

export const { addNotification, hideNotification } = notificationSlice.actions;

export default notificationSlice.reducer;
