export interface IStudentAuthState {
  uid: string | null;
  sid: string | null;
  email: string | null;
  status?: TAUthStatus;
  isAuth: boolean | null;
}

export type TAUthStatus = 'idle' | 'loading' | 'failed';

export interface IStudentDataType {
  uid: string | null;
  sid: number | null;
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
export interface IStudentProfileType extends IStudentDataType {}
export interface IDashboardItem {
  id: string;
  name: string;
  target: string;
  icon: JSX.Element;
}

export interface IAttendanceData {
  [date: string]: {
    [subject: string]: 'A' | 'P' | 'N/A';
  };
}


export interface IAttendanceStat {
    totalAttendances: number;
    totalPresent: number;
    percentagePresent: number;
}

export interface IAttendanceDataObj  {
  attendanceStat:IAttendanceStat;
  attendance:IAttendanceData
}

type TabScreenName="Recent"|"Table"

export interface ScreensData{
  name:TabScreenName;
  component:()=>JSX.Element;
}