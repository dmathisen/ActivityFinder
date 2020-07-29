import { configureStore } from '@reduxjs/toolkit';
import settingsReducer from './Components/Settings/settingsSlice';

export default configureStore({
  reducer: {
    settings: settingsReducer
  }
});