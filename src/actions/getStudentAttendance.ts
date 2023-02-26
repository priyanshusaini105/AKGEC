import {AppDispatch} from '../redux/store/index';
import database from '@react-native-firebase/database';
import {attendanceStat, getAttendanceData} from '../redux/slices/attendanceSlice';
import { IAttendanceData } from './../constants/types.d';


function calculateAttendance(data: IAttendanceData) {
  const attendanceValues = Object.values(data).map(Object.values).flat();
  const totalAttendances = attendanceValues.filter(a => a !== 'N/A').length;
  const totalPresent = attendanceValues.filter(a => a === 'P').length;
  const percentagePresent = (totalPresent / totalAttendances) * 100;
  return {totalAttendances, totalPresent, percentagePresent};
}

export function getStudentAttendance(dispatch: AppDispatch) {
  database()
    .ref('/classroom/year1_s4_2022_23_studentList/2210060/attendance')
    .once('value', snapshot => {
      const data = (snapshot.val())as IAttendanceData ;
      dispatch(getAttendanceData(data));
      dispatch(attendanceStat(calculateAttendance(data)));
    });
}
