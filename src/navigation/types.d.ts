import { ISubjectList, IAssignmentDetails, ITimeTableData, INotice, IEvent, IMessData, IRoomData, IClassesSchedule } from '../constants/types';

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
    Result:undefined;
    Notices:undefined;
    NoticeBoard:{
        notice:INotice;
    };
    Holidays:undefined;
    EventsList:undefined;
    EventDetails:{
        event:IEvent;
    }
    Hostel:undefined;
    HostelRoom:{
        roomData?:IRoomData
    };
    Mess:{
        messData?:IMessData;
    };
    Class:{
        classData?:IClassesSchedule;
    }
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

 