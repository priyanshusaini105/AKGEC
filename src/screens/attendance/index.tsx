import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import {AttendanceTable, ScreenWithBackButtonView} from '../../components';
import tw from 'twrnc';
import {ResuasbleStyles, Theme} from '../../constants';
import {StarBg} from '../../svg';
import {RootState} from '../../redux/store';
import {useSelector} from 'react-redux';

const {roundedLayout} = ResuasbleStyles;
const {colors} = Theme;

const Attendance = () => {
  const {attendance: attendanceData} = useSelector(
    (state: RootState) => state.attendanceData,
  );

  const subjectList: Array<string> = [
    'BAS-104',
    'BAS-05',
    'BAS-5',
    'BAS-1',
    'BAS-50',
  ];

  return (
    <ScreenWithBackButtonView>
      <View>
        <TouchableOpacity
          style={tw`self-center bg-[${colors.tertiary}] rounded-2xl my-7 p-1`}>
          <Text style={tw`text-[${colors.primary}]`}>Calender</Text>
        </TouchableOpacity>
        <StarBg />
        <View style={[roundedLayout, tw`h-198`]}>
          <Text>Attendance</Text>
          
          {/* table */}
          <AttendanceTable
            attendanceData={attendanceData}
            subjectList={subjectList}
          />
        </View>
      </View>
    </ScreenWithBackButtonView>
  );
};

export default Attendance;
