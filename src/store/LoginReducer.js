import {createSlice, nanoid} from '@reduxjs/toolkit';

const initialState = [];
export const loginSlice = createSlice({
  name: 'loginReducer',
  initialState,
  reducers: {
    addLogin: (state, action) => {
      const {nameReducer, emailReducer} = action.payload;
      const user = {
        id: nanoid(),
        nameReducer,
        emailReducer,
      };
      state.push(user);
      console.log('llll', user);
    },
  },
});
export const {addLogin} = loginSlice.actions;
export default loginSlice.reducer;
