import auth from '@react-native-firebase/auth';
import {setAuth} from '../redux/slices/authSlice';
import {AppDispatch} from '../redux/store/index';
import fetchStudentData from './fetchStudentDataAction';

const unsubscriber = (dispatch: AppDispatch) =>
  auth().onAuthStateChanged(user => {
    if (user) {
      dispatch(
        setAuth({
          uid: user.uid,
          email: user.email,
          sid: 2210060,
          isAuth: true,
          status: 'idle',
        }),
      );
      // fetching data of corressponding user
      fetchStudentData(dispatch, user.displayName??'invalid');
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
