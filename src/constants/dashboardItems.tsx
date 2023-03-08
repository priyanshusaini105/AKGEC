import { IDashboardItem } from "./types";
import { AssignmentIcon, TimeTableIcon, DateSheetIcon, ChangePasswordIcon, EventsIcon, LogoutIcon, DocumentsIcon, NoticeIcon, HostelIcon, HolidayIcon, ResultIcon, GroupChatIcon, ClassroomIcon } from '../svg'

export const dashboardItems: IDashboardItem[] = [
    {
        id: '4',
        name: "Time Table",
        target: "Timetable",
        icon: <TimeTableIcon />
    },
    {
        id: '3',
        name: "Notices",
        target: "Notices",
        icon: <NoticeIcon />
    },
    {
        id: '10',
        name: "Holidays",
        target: "Holidays",
        icon: <HolidayIcon />
    },
    {
        id: '10',
        name: "Classroom",
        target: "Classroom",
        icon: <ClassroomIcon />
    },
    {
        id: '9',
        name: "Assignemt",
        target: "Assignments",
        icon: <AssignmentIcon />
    },
    {
        id: '31',
        name: "Group Discussion",
        target: "UnderConstruction",
        icon: <GroupChatIcon />
    },
    {
        id: '42',
        name: "Results",
        target: "Result",
        icon: <ResultIcon />
    },
    {
        id: '2',
        name: "Documents",
        target: "UnderConstruction",
        icon: <DocumentsIcon />
    },
    {
        id: '1',
        name: "Hostel",
        target: "UnderConstruction",
        icon: <HostelIcon />
    },
    {
        id: '5',
        name: "Date Sheet",
        target: "UnderConstruction",
        icon: <DateSheetIcon />
    },
    {
        id: '7',
        name: "Events",
        target: "UnderConstruction",
        icon: <EventsIcon />
    },
    {
        id: '6',
        name: "Change Password",
        target: "ChangePassword",
        icon: <ChangePasswordIcon />
    },
    {
        id: '8',
        name: "Log Out",
        target: "logout",
        icon: <LogoutIcon />
    },
];