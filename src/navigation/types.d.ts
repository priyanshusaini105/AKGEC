import { ISubjectList, IAssignmentDetails } from '../constants/types';

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
export type TopTabParamList = {
    Recent: undefined;
    Table: undefined;
  };

 