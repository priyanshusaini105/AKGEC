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
    dob: string | null;
    gender: string | null;
  };
}
// export interface IStudentProfileType extends IStudentDataType {}
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
    | 'Holidays'
    | 'Hostel'
    | 'EventsList';
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
export interface IEvent{
  id: number;
    name: string;
    description: string;
    date: string;
    time: string;
    location: string;
    image: string;
    organizer: {
        name: string;
        email: string;
    };
}
export interface IMenu{
  [day:Tdays]:{
    breakfast: string[];
    lunch: string[];
    dinner: string[];
  }
}

export interface IMessData {
  name: string;
  manager: {
    name: string;
    email: string;
    phone: string;
  };
  menu: IMenu;
}
export interface IRoomData {
  number: string;
  floor: string;
  capacity: number;
  occupants: {
    name: string;
    email: string;
    phone: string;
  }[];
}
export interface IHostelData {
  name: string;
  image: string;
  warden: {
    name: string;
    email: string;
    phone: string;
  }
  room: IRoomData;
  mess: IMessData;
}
export interface IHostelObj {
  alloted: boolean;
  data?: IHostelData;
}
export interface IClassData {
    section_id: string;
    room_number: string;
    capacity: number;
    schedule: IClassesSchedule[]
}
export interface IClassesSchedule {
  class_id: string;
  class_name: string;
  professor: string;
  day: string;
  start_time: string;
  end_time: string;
}