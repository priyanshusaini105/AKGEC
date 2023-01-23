/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigator';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#2855AE',
  },
};

const App = () => {
  return (
      <NavigationContainer theme={theme}>
        <StackNavigator />
      </NavigationContainer>
  );
};

export default App;
