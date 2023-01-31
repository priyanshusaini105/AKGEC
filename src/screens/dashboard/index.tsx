import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import tw from 'twrnc';
import {AttendanceIcon, FeeIcon, StarBg} from '../../svg';
import {Theme, dashboardItems} from '../../constants';
import {DashboardItemTiles} from '../../components';
import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store/index';

const {colors} = Theme;

const suffix: string[] = [
  'st',
  'nd',
  'rd',
  'th',
  'th',
  'th',
  'th',
  'th',
  'Fetching...',
];

const Dashboard = () => {
  const studentData = useSelector((state: RootState) => state.studentData);
  // adding Suffix to the number
  const addSuffix: (num: number | null) => string = num =>
    num ? num + suffix[num - 1] : suffix[8];
  return (
    <>
      <View style={{...tw`flex-row justify-between p-4 pt-10 items-center`}}>
        {/* Header */}
        <View>
          <Text style={{...tw`text-6`}}>
            Hi, {studentData.studentInfo.name}
          </Text>
          <Text style={{...tw`opacity-50 text-4`}}>
            Btech {addSuffix(studentData?.studentInfo.year)} Year |{' '}
            {addSuffix(studentData?.studentInfo.sem)} sem
          </Text>
          <Text style={{...tw`opacity-50 text-4`}}>
            Student Id: {studentData?.studentInfo.studentId}
          </Text>
          <Text
            style={{
              ...tw`bg-white rounded-full text-[${colors.secondary}] p-2 py-0 w-20 mt-1 text-4 `,
            }}>
            {studentData?.studentInfo.session}
          </Text>
        </View>
        <View
          style={{
            ...tw`bg-gray-500 h-13 w-13 rounded-full border border-white`,
          }}></View>
      </View>
      <StarBg />
      {/* Tiles */}
      <View style={{...tw`bg-white rounded-t-10 mt-17`, flex: 1}}>
        <View style={{...tw`flex-row justify-between px-2 z-2 top-[-20]`}}>
          <TouchableOpacity
            style={{
              ...tw`rounded-xl shadow-lg shadow-blue-500 bg-white m-2 py-8 items-center justify-center w-9/20`,
            }}>
            <AttendanceIcon />
            <Text style={{...tw`text-black text-8 font-bold`}}>
              {studentData?.attendance}%
            </Text>
            <Text style={{...tw` text-black opacity-50`}}>Attendance</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              ...tw` shadow-lg shadow-blue-500 rounded-xl bg-white m-2 py-8 items-center justify-center w-9/20`,
            }}>
            <FeeIcon />
            <Text
              style={{
                ...tw`text-${
                  studentData?.feeDue === 0 ? 'green-400' : 'red-400'
                } text-7 font-bold text-center`,
              }}>
              {studentData?.feeDue === 0
                ? 'No Fee Due'
                : '₹' + studentData?.feeDue}
            </Text>
            <Text style={{...tw` text-black opacity-50`}}>Fees Due</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          contentContainerStyle={tw`w-full items-center`}
          numColumns={2}
          data={dashboardItems}
          scrollEnabled={true}
          keyExtractor={item => item.id}
          style={{...tw`mt-[-75]`}}
          renderItem={item => <DashboardItemTiles item={item.item} />}
        />
      </View>
    </>
  );
};

export default Dashboard;
