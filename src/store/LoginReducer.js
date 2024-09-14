import {createSlice} from '@reduxjs/toolkit';

export const loginSlice = createSlice({
  name: 'loginReducer',
  initialState: {},
  reducers: {
    addLogin: (state, action) => {
      const {name, email} = action.payload;
      const user = {
        name,
        email,
      };
      state.push(user);
    },
  },
});
export const {addLogin} = loginSlice.actions;
export default loginSlice.reducer;
