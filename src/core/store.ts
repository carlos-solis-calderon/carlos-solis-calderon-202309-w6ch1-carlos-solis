import { configureStore } from '@reduxjs/toolkit';
import phoneSlice from './features/phone.number/phoneSlice';
import callSlice from './features/phone.call/callSlice';

export const store = configureStore({
  reducer: {
    phone: phoneSlice,
    call: callSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
