import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {
  IAttendanceStat,
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
      state.attendance = action.payload;
    },
    attendanceStat: (state, action: PayloadAction<IAttendanceStat>) => {
      console.warn(state.attendance);
      state.attendanceStat = action.payload;
    },
  },
});
export const {getAttendanceData, attendanceStat} = attendanceSlice.actions;
export default attendanceSlice.reducer;
