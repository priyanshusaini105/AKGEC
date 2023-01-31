export interface IStudentAuthState {
  uid: string | null;
  sid: number | null;
  email: string | null;
  status?: IAuthStatus;
  isAuth: boolean | null;
}

export type IAuthStatus = 'idle' | 'loading' | 'failed';

export interface IStudentDataType {
  uid: string | null;
  sid: number | null;
  attendance: number | null;
  feeDue: number | null;
  studentInfo: {
    name: string | null;
    email: string | null;
    phone: string | null;
    address: string | null;
    session: string | null;
    studentId: number | null;
    year: 1 | 2 | 3 | 4 | null;
    sem: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | null;
  };
}
export type IDashboardItem = {
  id: string;
  name: string;
  target: string;
  icon: JSX.Element;
};
