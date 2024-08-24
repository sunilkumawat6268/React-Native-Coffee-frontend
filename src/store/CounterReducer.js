import {createSlice, payload} from '@reduxjs/toolkit';
import HomeData from '../mockData/HomeData';

export const counterSlice = createSlice({
  name: 'counter',
  value: 'number',
  initialState: {
    value: 1,
    cartAddingData: [],
  },
  reducers: {
    addItems: (state, action) => {
      const isExist = state.cartAddingData.find(
        item => item.id === action.payload?.id,
      );
      if (isExist) {
        isExist.quantity = (isExist.quantity || 1) + 1;
        isExist.qty += 1;
      } else {
        state.cartAddingData = [...state.cartAddingData, action.payload];
        qty = 1;
      }
    },
    removeItems: (state, action) => {
      const item = state.cartAddingData.find(
        item => item.id === action.payload,
      );
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          state.cartAddingData = state.cartAddingData.filter(
            item => item.id !== action.payload,
          );
        }
      }
    },

    incrementItems: (state, action) => {
      const item = state.cartAddingData.find(
        item => item.id === action.payload,
      );
      if (item) {
        item.quantity += 1;
      }
    },
    clearCart: state => {
      state.cartAddingData = [];
    },
  },
});

export const {addItems, removeItems, clearCart, incrementItems, quantity} =
  counterSlice.actions;
export default counterSlice.reducer;
