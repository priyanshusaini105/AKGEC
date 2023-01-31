import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IAuthStatus, IStudentAuthState} from '../../../constants/types';

const initialState: IStudentAuthState = {
  uid: null,
  sid: null,
  email: null,
  isAuth: null,
  status: 'loading',
};

export const authSlice = createSlice({
  name: 'authState',
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<IStudentAuthState>) => {
      state.uid = action.payload.uid;
      state.sid = action.payload.sid;
      state.email = action.payload.email;
      state.isAuth = action.payload.isAuth;
      state.status = action.payload?.status;
    },
    setLoading: (state, action: PayloadAction<IAuthStatus>) => {
      state.status = action.payload;
    },
  },
});


export const {setAuth,setLoading } = authSlice.actions

export default authSlice.reducer
