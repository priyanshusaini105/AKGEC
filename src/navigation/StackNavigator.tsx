import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import {
  Dashboard,
  SignIn,
  SplashScreen,
  ForgotPassword,
  Profile,
  Attendance,
  Classroom,
  ChangePassword,
  Assignments,
  AssignmentScreen,
  AssignmentDetail,
  Timetable,
  Result,
  NoticeBoard,
  Notices,
  UnderConstruction,
  Holidays,
  EventsList,
  EventDetails,
  Hostel,
  HostelRoom,
  Mess,
  Class
} from '../screens';
import { useState, useEffect, useMemo } from 'react';
import type { TStackNavType } from './types';
import { Alert, Easing } from 'react-native';
import { TransitionSpec } from '@react-navigation/stack/lib/typescript/src/types';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import unsubscriber from '../actions/authActions';
import { useNetInfo } from '@react-native-community/netinfo';
import { store } from '../redux/store/index';


const Stack = createStackNavigator<TStackNavType>();

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

function DisconnectedAlert() {
  const netInfo = useNetInfo();
  if ((netInfo.isConnected === false)) Alert.alert('Unable to Connect To Internet');
  return null;
}

const StackNavigator = () => {
  const authState = useSelector((state: RootState) => state.auth);
  const [isReady, setIsReady] = useState<boolean>(false);

  useEffect(() => {
    unsubscriber(store.dispatch);
    const timeout = setTimeout(() => {
      setIsReady(true);
    }, 1500);

    return () => clearTimeout(timeout);
  }, []);

  const stackNavigator = useMemo(
    () => (
      <>
        <DisconnectedAlert />
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            // gestureEnabled: true,
            // ...TransitionPresets.ModalTransition,
            // ...TransitionPresets.ModalPresentationIOS,
            // ...TransitionPresets.ModalSlideFromBottomIOS,
            ...TransitionPresets.RevealFromBottomAndroid,
            // ...TransitionPresets.BottomSheetAndroid,
            // ...TransitionPresets.SlideFromRightIOS,
            gestureDirection: 'vertical',
            // transitionSpec: {
            //   open: config,
            //   close: closeConfig,
            // },
            headerMode: 'float',
          }}
          // animation='fade'
          initialRouteName={authState.isAuth ? 'Dashboard' : 'SignIn'}>
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          <Stack.Screen name="Attendance" component={Attendance} />
          <Stack.Screen name="Classroom" component={Classroom} />
          <Stack.Screen
            name="UnderConstruction"
            component={UnderConstruction}
          />
          <Stack.Screen name="ChangePassword" component={ChangePassword} />
          <Stack.Screen name="Assignments" component={Assignments} />
          <Stack.Screen name="AssignmentScreen" component={AssignmentScreen} />
          <Stack.Screen name="AssignmentDetail" component={AssignmentDetail} />
          <Stack.Screen name="Timetable" component={Timetable} />
          <Stack.Screen name="Result" component={Result} />
          <Stack.Screen name="Notices" component={Notices} />
          <Stack.Screen name="NoticeBoard" component={NoticeBoard} />
          <Stack.Screen name="Holidays" component={Holidays} />
          <Stack.Screen name="EventsList" component={EventsList} />
          <Stack.Screen name="EventDetails" component={EventDetails} />
          <Stack.Screen name="Hostel" component={Hostel} />
          <Stack.Screen name="HostelRoom" component={HostelRoom} />
          <Stack.Screen name="Mess" component={Mess} />
          <Stack.Screen name="Class" component={Class} />
        </Stack.Navigator>
      </>
    ),
    [authState.isAuth],
  );

  if (!isReady || authState.status === 'loading' || authState.isAuth === null)
    return <SplashScreen />;
  else return stackNavigator;
};

export default StackNavigator;
