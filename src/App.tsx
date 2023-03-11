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
import database  from '@react-native-firebase/database';
import tw from './lib/tw';
import { StatusBar } from 'react-native';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: tw.color('primary') as string,
  },
};




const App = () => {

  database().setPersistenceEnabled(true);
  
  return (
      <Provider store={store}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={tw.color('primary')}
        />
        <NavigationContainer theme={theme}>
          <StackNavigator />
        </NavigationContainer>
      </Provider>
  );
};

export default App;
