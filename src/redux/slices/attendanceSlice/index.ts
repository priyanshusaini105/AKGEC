import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {
  IAttendanceDataObj,
  IAttendanceData,
} from '../../../constants/types';

const initialState: IAttendanceDataObj = {
  attendance: {},
  attendanceStat: {totalAttendances: 0, totalPresent: 0, percentagePresent: 0},
};

export const attendanceSlice = createSlice({
  name: 'attendanceSlice',
  initialState,
  reducers: {
    getAttendanceData: (state, action: PayloadAction<IAttendanceData>) => {
      state.attendance = sortAttendanceByDate(action.payload);
      state.attendanceStat = calculateAttendance(state.attendance);
    }
  },
});
export const {getAttendanceData} = attendanceSlice.actions;
export default attendanceSlice.reducer;

// sorting data according to date
function sortAttendanceByDate(data: IAttendanceData): IAttendanceData {
  const sortedDates = Object.keys(data).sort().reverse();
  const sortedData: IAttendanceData = {};
  sortedDates.forEach(date => {
    sortedData[date] = data[date];
  });
  return sortedData;
}


// calculating total attendance statstics
function calculateAttendance(data: IAttendanceData) {
  const attendanceValues = Object.values(data).map(Object.values).flat();
  const totalAttendances = attendanceValues.filter(a => a !== 'N/A').length;
  const totalPresent = attendanceValues.filter(a => a === 'P').length;
  const percentagePresent = (totalPresent / totalAttendances) * 100;
  return {totalAttendances, totalPresent, percentagePresent};
}