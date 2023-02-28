import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import {personalInfo} from './pages/auth/config';

export const store = configureStore({
  reducer: {
    personalInfo: personalInfo as any,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
