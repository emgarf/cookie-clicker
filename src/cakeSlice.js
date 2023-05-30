import {createSlice} from '@reduxjs/toolkit';
import initialState from './constants/constant';

export const cakeSlice = createSlice({
  name: 'cake',
  initialState: localStorage.getItem("gameState") ? JSON.parse(localStorage.getItem("gameState")) : initialState,
  reducers: {
    increment: (state) => {
      state.cake += state.cakePerClick;
    },
    incrementItem: (state, action) => {
      state.items[action.payload].count += 1;
      state.cake -= state.items[action.payload].price;
      state.items[action.payload].price = Math.ceil(state.items[action.payload].initialPrice * Math.pow(1.3, state.items[action.payload].count));
    },
    incrementByAmount: (state, action) => {
      state.cake += action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const {increment, incrementItem, incrementByAmount} = cakeSlice.actions;

export default cakeSlice.reducer;