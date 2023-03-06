import {AppDispatch} from '../redux/store/index';
import database, { FirebaseDatabaseTypes } from '@react-native-firebase/database';
import {getAttendanceData} from '../redux/slices/attendanceSlice';
import {IAttendanceData} from './../constants/types.d';

export function getStudentAttendance(dispatch: AppDispatch) {
  const ref = database().ref(
    '/classroom/year1_s4_2022_23_studentList/2210060/attendance',
  );
  const callback = (snapshot: FirebaseDatabaseTypes.DataSnapshot) => {
    const data = snapshot.val() as IAttendanceData;
    dispatch(getAttendanceData(data));
  };
  ref.on('value', callback);
  return {ref,callback};
}
