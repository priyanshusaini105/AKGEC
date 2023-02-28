import {Text, View} from 'react-native';
import React from 'react';
import tw from '../../lib/tw';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';

const attendanceColor = {
  A: 'text-red-600',
  P: 'text-green-600',
  'N/A': 'text-yellow-500'
};

const Recent = () => {
  const attendanceStat = useSelector(
    (state: RootState) => state.attendanceData.attendanceStat,
  );
  const attendanceData = useSelector(
    (state: RootState) => state.attendanceData.attendance,
  );
  const lastDate = Object.keys(attendanceData)[0];
  const lastDayAttendance = attendanceData[lastDate];
  console.log(lastDayAttendance);
  return (
    <View style={tw`bg-white flex-1`}>
      <View style={tw`justify-center items-center p-2 `}>
        <Text
          style={tw`text-black text-4 text-left m-1 font-nunito min-w-45`}>
          Total Present: {attendanceStat.percentagePresent}%
        </Text>
        <Text
          style={tw`text-black text-4 text-start m-1 font-nunito min-w-45`}>
          Total Present: {attendanceStat.totalPresent}
        </Text>
        <Text
          style={tw`text-black text-4 text-start m-1 font-nunito min-w-45`}>
          Total Present: {attendanceStat.totalAttendances}
        </Text>
      </View>
      <View style={tw`border opacity-40 mx-4`}></View>
      <View>
        <Text style={tw`text-black ml-5 m-4 text-right`}>Date: {lastDate}</Text>
        {Object.keys(lastDayAttendance).map((subject,index) => {
          return (
            <View style={tw`flex-row justify-between items-center p-2 m-2`} key={index}>
              <Text
                style={tw`text-black text-4 text-start m-1 font-nunito min-w-45 `}>
                {subject}
              </Text>
              <Text
                style={tw`text-black text-4 text-start m-1 font-nunito min-w-45 ${
                  attendanceColor[lastDayAttendance[subject]]
                }`}>
                {lastDayAttendance[subject]}
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default Recent;
