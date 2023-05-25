import { configureStore } from '@reduxjs/toolkit'
import cakeSlice from './cakeSlice';
export default configureStore({
  reducer: {
    counter: cakeSlice,
  },
})