import {View} from 'react-native';
import { ScreenWithBackButtonView} from '../../components';
import {StarBg} from '../../svg';
import Table from './Table';
import Recent from './Recent';
import AttendanceTopTabs from '../../navigation/TopTabAttendanceNavigator';
import { ScreensData } from '../../constants/types';
import tw from '../../lib/tw';


const screens:Array<ScreensData>=[
  {
    name:"Recent",
    component:Recent
  },
  {
    name:"Table",
    component:Table
  },
]

const Attendance = () => {

  return (
    <ScreenWithBackButtonView>
      <View style={tw`mt-10`}>
        <StarBg />
        <View style={tw`h-198 pt-6 roundedLayout`}>
          <AttendanceTopTabs screens={screens}/>
        </View>
      </View>
    </ScreenWithBackButtonView>
  );
};

export default Attendance;
