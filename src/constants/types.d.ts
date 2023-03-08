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
  target:
    | 'UnderConstruction'
    | 'Result'
    | 'Classroom'
    | 'Assignments'
    | 'Timetable'
    | 'logout'
    | 'ChangePassword'
    | 'Notices'
    | 'Holidays';
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

export interface IAttendanceDataObj {
  attendanceStat: IAttendanceStat;
  attendance: IAttendanceData;
}

type TabScreenName = 'Recent' | 'Table';

export interface ScreensData {
  name: TabScreenName;
  component: () => JSX.Element;
}
export interface ISubjectList {
  name: string;
  code: string;
}
export interface IAssignment {
  id: number;
  name: string;
  dueDate: string;
  isSubmitted: boolean;
}
export interface IAssignmentDetails extends IAssignment {
  description: string;
  points: {
    total: number;
    obtained: number;
  };
  instructions: string;
}
interface ISubjectAssignments extends ISubjectList {
  assignments: IAssignmentDetails[];
}
export interface IDocumentDetail {
  name: string | null;
  uri: string | null;
  size: number | null;
  type: string | null;
  uploaded: boolean;
}
export interface ITimeTablePeriod {
  time: string;
  subject: string;
  teacher: string;
  periodNo: number;
}

export type Tdays =
  | 'Monday'
  | 'Tuesday'
  | 'Wednesday'
  | 'Thursday'
  | 'Friday'
  | 'Saturday';
export interface ITimeTableData {
  list: ITimeTablePeriod[];
  day: Tdays;
}
export interface INotice {
  id: number;
  title: string;
  description: string;
  date: string;
  isImportant: boolean;
  isRead: boolean;
}
export interface IHoliday {
  name: string;
  date: string;
  description: string;
}