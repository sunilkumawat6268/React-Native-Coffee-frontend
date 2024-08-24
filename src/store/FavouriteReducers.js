// import counterS
import {createSlice} from '@reduxjs/toolkit';

export const favouriteSlice = createSlice({
  name: 'Favourite',
  initialState: {
    favouriteItems: [],
  },
  reducers: {
    addFavourite: (state, action) => {
      const isExist = state.favouriteItems.find(
        item => item.id === action.payload?.id,
      );
      if (isExist) {
        state.favouriteItems = state.favouriteItems.filter(
          item => item.id !== action.payload?.id,
        );
      } else {
        state.favouriteItems = [...state.favouriteItems, action.payload];
        qty = 1;
      }
    },
  },
});
export const {addFavourite} = favouriteSlice.actions;
export default favouriteSlice.reducer;
