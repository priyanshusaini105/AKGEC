import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {Dashboard, SignIn, SplashScreen, ForgotPassword,Profile, Attendace} from '../screens';
import {useEffect} from 'react';
import type {IStackNavType} from './types';
import {Alert, Easing} from 'react-native';
import {TransitionSpec} from '@react-navigation/stack/lib/typescript/src/types';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import unsubscriber from '../actions/authActions';
import NetInfo from '@react-native-community/netinfo';

const Stack = createStackNavigator<IStackNavType>();

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

const unsubscribe = NetInfo.addEventListener(state => {
  if (!state.isConnected) Alert.alert("Connect To Internet");
});
unsubscribe()

const StackNavigator = () => {
  const dispatch = useDispatch();
  const authState = useSelector((state: RootState) => state.auth);

  // Handle user state changes=================>
  useEffect(() => {
    return unsubscriber(dispatch); // unsubscribe on unmount
  }, []);
  return authState.isAuth === null || authState.status === 'loading' ? (
    <SplashScreen />
  ) : (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        // gestureEnabled: true,
        ...TransitionPresets.SlideFromRightIOS,
        gestureDirection: 'horizontal',
        transitionSpec: {
          open: config,
          close: closeConfig,
        },
        headerMode: 'float',
      }}
      // animation='fade'
      initialRouteName={authState.isAuth ? 'Dashboard' : 'SignIn'}>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="Profile" component={Profile}/>
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="Attendance" component={Attendace} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
