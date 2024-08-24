import {View, Text} from 'react-native';
import React from 'react';
import Navigation from './navigation/StackNavigation';
import Toast from 'react-native-toast-message';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import store from './store/Store';

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Provider store={store}>
        <Navigation />
        <Toast />
      </Provider>
    </GestureHandlerRootView>
  );
};
export default App;
