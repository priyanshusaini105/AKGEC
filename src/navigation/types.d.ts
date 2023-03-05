import { ISubjectList, IAssignmentDetails, ITimeTableData } from '../constants/types';

export type TStackNavType={
    Dashboard:undefined;
    Intro:undefined;
    Home:undefined;
    SignIn:undefined;
    ForgotPassword:undefined;
    Profile:undefined;
    Attendance:undefined
    UnderConstruction:undefined;
    SplashScreen:undefined;
    Classroom:undefined;
    ChangePassword:undefined;
    Assignments:undefined;
    Timetable:undefined;
    AssignmentScreen:{
            subject:ISubjectList;
    };
    AssignmentDetail:{
        assignment:IAssignmentDetails;
    };
};
export type TopTabAttendanceParamList = {
    Recent: undefined;
    Table: undefined;
  };
export type TopTabTimetableParamList = {
    Sunday:{
        timetableItem:ITimeTableData;
    };
    Monday:{
        timetableItem:ITimeTableData;
    };
    Tuesday:{
        timetableItem:ITimeTableData;
    };
    Wednesday:{
        timetableItem:ITimeTableData;
    };
    Thursday:{
        timetableItem:ITimeTableData;
    };
    Friday:{
        timetableItem:ITimeTableData;
    };
    Saturday:{
        timetableItem:ITimeTableData;
    };
}

 