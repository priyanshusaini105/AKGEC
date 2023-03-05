import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TopTabTimetableParamList } from './types';
import {  TabBarTimeTable } from '../components';
import { ITimeTableData } from './../constants/types.d';
import { TimeTableScreen } from '../screens';


const Tab = createMaterialTopTabNavigator<TopTabTimetableParamList>();

const TimeTableTopTabs = ({timetable}:{timetable:ITimeTableData[]}) => {
  return (
    <Tab.Navigator tabBar={props=><TabBarTimeTable {...props}/>}>
        {timetable.map((timetableItem, index) => (
            <Tab.Screen key={index} name={timetableItem.day} component={TimeTableScreen} initialParams={{timetableItem}}/>
        ))}
    </Tab.Navigator>
  )
}

export default TimeTableTopTabs