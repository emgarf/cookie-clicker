import {createSlice} from '@reduxjs/toolkit'

export const cookieSlice = createSlice({
  name: 'cookie',
  initialState: {
    cookie: 0,
    cursor: 0,
    cursorPrice: 1,
    grandMa: 0,
    grandMaPrice: 100,
  },
  reducers: {
    increment: (state) => {
      state.cookie += 1
    },
    decrementByAmount: (state, action) => {
      state.cookie -= action.payload
    },
    incrementCursor: (state) => {
      state.cursor += 1;
      state.cookie -= state.cursorPrice;
      state.cursorPrice = Math.ceil(state.cursorPrice * 1.3);
    },
    incrementGrandma: (state) => {
      state.grandMa += 1;
      state.cookie -= state.grandMaPrice;
      state.grandMaPrice = Math.ceil(state.grandMaPrice * 1.3);
    },
    incrementByAmount: (state, action) => {
      state.cookie += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {increment, incrementCursor, incrementByAmount, decrementByAmount, incrementGrandma} = cookieSlice.actions

export default cookieSlice.reducer