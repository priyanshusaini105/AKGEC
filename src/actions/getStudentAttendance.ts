import {AppDispatch} from '../redux/store/index';
import database from '@react-native-firebase/database';
import { getAttendanceData} from '../redux/slices/attendanceSlice';
import { IAttendanceData } from './../constants/types.d';


export function getStudentAttendance(dispatch: AppDispatch) {
  database()
    .ref('/classroom/year1_s4_2022_23_studentList/2210060/attendance')
    .once('value', snapshot => {
      const data = (snapshot.val())as IAttendanceData ;
      dispatch(getAttendanceData(data));
    });
}
