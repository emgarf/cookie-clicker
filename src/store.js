import { configureStore } from '@reduxjs/toolkit'
import cookieSlice from './cookieSlice';
export default configureStore({
  reducer: {
    counter: cookieSlice,
  },
})