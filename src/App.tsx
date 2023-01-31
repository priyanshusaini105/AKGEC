/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {Provider} from 'react-redux';
import StackNavigator from './navigation/StackNavigator';
import {store} from './redux/store';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#2855AE',
  },
};

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer theme={theme}>
        <StackNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
