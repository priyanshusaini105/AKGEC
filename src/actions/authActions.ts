import auth from '@react-native-firebase/auth';
import {setAuth} from '../redux/slices/authSlice';
import {AppDispatch} from '../redux/store/index';
import fetchStudentData from './fetchStudentDataAction';
import { getStudentAttendance } from './getStudentAttendance';

const unsubscriber = (dispatch: AppDispatch) =>
  auth().onAuthStateChanged(user => {
    if (user) {
      fetchStudentData(dispatch, user.displayName??'Invalid');
      getStudentAttendance(dispatch);
      dispatch(
        setAuth({
          uid: user.uid,
          email: user.email,
          sid: user.displayName,
          isAuth: true,
          status: 'idle',
        }),
      );
      // fetching data of corressponding user
    } else {
      dispatch(
        setAuth({
          uid: null,
          email: null,
          sid: null,
          isAuth: false,
          status: 'idle',
        }),
      );
    }
  });
export default unsubscriber;
