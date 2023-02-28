import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import tw from '../lib/tw';

const attendanceColor = {
  A: 'text-red-600',
  P: 'text-green-600',
  'N/A': 'text-yellow-500',
};

const oddBgColor = 'bg-sky-100';
const evenBgColor = 'bg-white';

interface IAttendanceData {
  [date: string]: {
    [subject: string]: 'A' | 'P' | 'N/A';
  };
}

interface propTypes {
  subjectList: Array<string>;
  attendanceData: IAttendanceData;
}

const AttendanceTable = ({subjectList, attendanceData}: propTypes) => {
  const dates = Object.keys(attendanceData);

  return (
    <View style={tw`flex-row bg-sky-200 rounded-t-3 m-3 shadow-lg shadow-blue-400`}>
      {/* Date column */}
      <View>
        <Text style={tw`w-27 text-4 p-2 text-center text-black border-b font-nunito-bold`}>Dates</Text>
        {dates.map((date,index) => {
          return (
            <Text key={date} style={tw`w-27 ${index%2===0?evenBgColor:oddBgColor} text-4 p-2 text-center text-black font-nunito-semibold`}>
              {date}
            </Text>
          );
        })}
      </View>

      {/* Subject and attendance columns */}
      <ScrollView horizontal>
        {subjectList.map(subject => (
          <View key={subject} style={tw`flex-col w-25`}>
            <Text style={tw`w-full text-black border-b text-4 p-2 text-center font-nunito-semibold`}>
              {subject}
            </Text>
            <ScrollView>
              {dates.map((date,index) => (
                <Text
                  key={`${date}-${subject}`}
                  style={tw`w-full text-black font-nunito ${index%2===0?evenBgColor:oddBgColor}  text-4 p-2 text-center ${
                    attendanceColor[attendanceData[date][subject]]
                  }`}>
                  {attendanceData[date][subject] ?? '--'}
                </Text>
              ))}
            </ScrollView>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default AttendanceTable;
