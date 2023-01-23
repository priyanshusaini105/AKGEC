import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {Dashboard, SignIn, SplashScreen, ForgotPassword} from '../screens';
import {useState, useEffect} from 'react';
import type {StackNavType} from './types';
import {Easing, View} from 'react-native';
import {TransitionSpec} from '@react-navigation/stack/lib/typescript/src/types';
import auth from '@react-native-firebase/auth';

const Stack = createStackNavigator<StackNavType>();

// screen translations animation
const config: TransitionSpec = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 50,
    mass: 3,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const closeConfig: TransitionSpec = {
  animation: 'timing',
  config: {
    duration: 150,
    easing: Easing.linear,
  },
};

const StackNavigator = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState<boolean | null>(null);

  const checkIfFirstLaunch: () => Promise<boolean> = async () => {
    try {
      auth().onAuthStateChanged(user => {
        return true;
      });
      return false;
    } catch (error) {
      return false;
    }
  };

  useEffect(() => {
    (async () => {
      const firstLaunch = await checkIfFirstLaunch();
      setIsFirstLaunch(firstLaunch);
    })();
  }, []);

  return isFirstLaunch === null ? (
    <View></View>
  ) : (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        ...TransitionPresets.SlideFromRightIOS,
        gestureDirection: 'horizontal',
        transitionSpec: {
          open: config,
          close: closeConfig,
        },
        headerMode: 'float',
      }}
      // animation='fade'
      initialRouteName="SignIn">
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
      {isFirstLaunch && <Stack.Screen name="Intro" component={SplashScreen} />}
    </Stack.Navigator>
  );
};

export default StackNavigator;
