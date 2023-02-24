import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import tw from 'twrnc';
import {AttendanceIcon, FeeIcon, StarBg} from '../../svg';
import {Theme, dashboardItems, ResuasbleStyles} from '../../constants';
import {DashboardItemTiles} from '../../components';
import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store/index';
import DashboardHeader from './DashboardHeader';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { IStackNavType } from '../../navigation/types';

const {roundedLayout}=ResuasbleStyles;

const Dashboard = () => {
  const studentData = useSelector((state: RootState) => state.studentData);
  const navigation= useNavigation<StackNavigationProp<IStackNavType>>()
  return (
    <>
      <DashboardHeader studentData={studentData} />
      <StarBg />
      {/* Tiles */}
      <View style={{...roundedLayout,...tw`mt-17`, flex: 1}}>
        <View style={{...tw`flex-row justify-between px-2 z-2 top-[-20]`}}>
          <TouchableOpacity
            onPress={()=>navigation.navigate("Attendace")}
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
