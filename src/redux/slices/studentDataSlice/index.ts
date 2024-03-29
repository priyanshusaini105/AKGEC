import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IStudentDataType} from '../../../constants/types';

const initialState: IStudentDataType = {
  uid: null,
  sid: null,
  feeDue: null,
  studentInfo: {
    name: null,
    email: null,
    phone: null,
    address: null,
    session: null,
    studentId: null,
    year: null,
    sem: null,
    dob:null,
    gender:null,
  },
};

export const studentDataSlice = createSlice({
  name: 'StudentData',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<IStudentDataType>) => {
      state.uid = action.payload.uid;
      state.sid = action.payload.sid;
      state.feeDue = action.payload.feeDue;
      state.studentInfo.name = action.payload.studentInfo.name;
      state.studentInfo.email = action.payload.studentInfo.email;
      state.studentInfo.phone = action.payload.studentInfo.phone;
      state.studentInfo.address = action.payload.studentInfo.address;
      state.studentInfo.session = action.payload.studentInfo.session;
      state.studentInfo.studentId = action.payload.studentInfo.studentId;
      state.studentInfo.year = action.payload.studentInfo.year;
      state.studentInfo.sem = action.payload.studentInfo.sem;
      state.studentInfo.dob = action.payload.studentInfo.dob;
      state.studentInfo.gender = action.payload.studentInfo.gender;
    },
  },
});

export const {setData} = studentDataSlice.actions;

export default studentDataSlice.reducer;
