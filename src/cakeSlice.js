import {createSlice} from '@reduxjs/toolkit'

export const cakeSlice = createSlice({
  name: 'cake',
  initialState: {
    cake: 0,
    cursor: 0,
    cursorPrice: 15,
    grandMa: 0,
    grandMaPrice: 100,
    bakery: 0,
    bakeryPrice: 1500,
  },
  reducers: {
    increment: (state) => {
      state.cake += 1;
    },
    decrementByAmount: (state, action) => {
      state.cake -= action.payload;
    },
    incrementCursor: (state) => {
      state.cursor += 1;
      state.cake -= state.cursorPrice;
      state.cursorPrice = Math.ceil(state.cursorPrice * 1.4);
    },
    incrementGrandma: (state) => {
      state.grandMa += 1;
      state.cake -= state.grandMaPrice;
      state.grandMaPrice = Math.ceil(state.grandMaPrice * 1.7);
    },
    incrementBakery: (state) => {
      state.bakery += 1;
      state.cake -= state.bakeryPrice;
      state.bakeryPrice = Math.ceil(state.bakeryPrice * 1.7);
    },
    incrementByAmount: (state, action) => {
      state.cake += action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const {increment, incrementCursor, incrementByAmount, decrementByAmount, incrementGrandma, incrementBakery} = cakeSlice.actions;

export default cakeSlice.reducer;