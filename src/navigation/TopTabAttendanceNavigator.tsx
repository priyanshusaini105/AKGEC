import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TabBarAttendance } from '../components';
import { ScreensData } from '../constants/types';
import { TopTabAttendanceParamList } from './types';


const Tab = createMaterialTopTabNavigator<TopTabAttendanceParamList>();


export default function AttendanceTopTabs({screens}:{screens:Array<ScreensData>}) {
  return (
    <Tab.Navigator tabBar={props=><TabBarAttendance {...props}/>}>
      {screens.map((screen,index) =>
        <Tab.Screen name={screen.name} key={index.toString()} component={screen.component}/>
      )}
    </Tab.Navigator>
  );
}