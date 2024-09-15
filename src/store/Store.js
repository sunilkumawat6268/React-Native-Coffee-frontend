import {configureStore} from '@reduxjs/toolkit';
// import {counterReducer}
import counterSlice from './CounterReducer';
import favouriteSlice from './FavouriteReducers';
import loginSlice from './LoginReducer';

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    Favourite: favouriteSlice,
    loginReducer: loginSlice,
  },
});
export default store;
