import { IDashboardItem } from "./types";
import { AssignmentIcon,TimeTableIcon,DateSheetIcon, ChangePasswordIcon ,EventsIcon, LogoutIcon, DocumentsIcon, NoticeIcon, HostelIcon, HolidayIcon, ResultIcon, GroupChatIcon, ClassroomIcon} from '../svg'

export const dashboardItems:Array<IDashboardItem> = [
    {
        id: '2',
        name: "Documents",
        target: "Documents",
        icon: <DocumentsIcon/>
    },
    {
        id: '3',
        name: "Notices",
        target: "Notices",
        icon: <NoticeIcon/>
    },
    {
        id: '10',
        name: "Classroom",
        target: "Classroom",
        icon: <ClassroomIcon/>
    },
    {
        id: '9',
        name: "Assignemt",
        target: "Assignment",
        icon: <AssignmentIcon/>
    },
    {
        id: '10',
        name: "Holidays",
        target: "Holiday",
        icon: <HolidayIcon/>
    },
    {
        id: '1',
        name: "Hostel",
        target: "TimeTable",
        icon: <HostelIcon/>
    },
    {
        id: '31',
        name: "Group Discussion",
        target: "Group Chat",
        icon: <GroupChatIcon/>
    },
    {
        id: '4',
        name: "Time Table",
        target: "TimeTable",
        icon: <TimeTableIcon/>
    },
    {
        id: '42',
        name: "Results",
        target: "Result",
        icon: <ResultIcon/>
    },
    {
        id: '5',
        name: "Date Sheet",
        target: "DateSheet",
        icon: <DateSheetIcon/>
    },
    {
        id: '6',
        name: "Change Password",
        target: "ChangePassword",
        icon: <ChangePasswordIcon/>
    },
    {
        id: '7',
        name: "Events",
        target: "Events",
        icon: <EventsIcon/>
    },
    {
        id: '8',
        name: "Log Out",
        target: "logout",
        icon: <LogoutIcon/>
    },
];