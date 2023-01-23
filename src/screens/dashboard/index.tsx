import {View, Text, TouchableOpacity, FlatList, ScrollView} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import tw from 'twrnc';
import {
  AttendanceIcon,
  FeeIcon,
  StarBg,
} from '../../svg';
import {Theme, dashboardItems} from '../../constants';
import type {DashboardItem} from '../../constants/types';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

const {colors} = Theme;
type Nav = {
  navigate: (value: string) => void;
};

const Tiles = ({item}: {item: DashboardItem}) => {
  const {navigate} = useNavigation<Nav>();

  return (
    <TouchableOpacity
      style={{
        ...tw`bg-[${colors.tertiary}] shadow-[${colors.primary}] m-2 rounded-3 py-6 items-center justify-center shadow-md w-37`,
      }}
      onPress={() => {
        if (item.target == 'logout')
          auth()
            .signOut()
            .then(() => navigate("SignIn"));
        else navigate(item.target);
      }}>
      {item.icon}
      <Text style={{...tw`text-5 text-black text-center`}}>{item.name}</Text>
    </TouchableOpacity>
  );
};

const Dashboard = () => {
  return (
    <>
      <View style={{...tw`flex-row justify-between p-4 pt-10 items-center`}}>
        <View>
          <Text style={{...tw`text-6`}}>Hi, Akshay Kumar</Text>
          <Text style={{...tw`opacity-50 text-4`}}>
            Btech 1st Year | 1st sem
          </Text>
          <Text style={{...tw`opacity-50 text-4`}}>Student Id: 1234567</Text>
          <Text
            style={{
              ...tw`bg-white rounded-full text-[${colors.secondary}] p-2 py-0 w-20 mt-1 text-4 `,
            }}>
            2022-23
          </Text>
        </View>
        <View
          style={{
            ...tw`bg-gray-500 h-13 w-13 rounded-full border border-white`,
          }}></View>
      </View>
      <StarBg />
      <View style={{...tw`bg-white rounded-t-10 mt-17`, flex: 1}}>
        <View style={{...tw`flex-row justify-between px-2 z-2 top-[-20]`}}>
          <TouchableOpacity
            style={{
              ...tw`rounded-xl shadow-lg shadow-blue-500 bg-white m-2 py-8 items-center justify-center w-9/20`,
            }}>
            <AttendanceIcon />
            <Text style={{...tw`text-black text-8 font-bold`}}>98.4%</Text>
            <Text style={{...tw` text-black opacity-50`}}>Attendance</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              ...tw` shadow-lg shadow-blue-500 rounded-xl bg-white m-2 py-8 items-center justify-center w-9/20`,
            }}>
            <FeeIcon />
            <Text style={{...tw`text-black text-7 font-bold text-center`}}>
              ₹5000.00
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
          renderItem={item => <Tiles item={item.item} />}
        />
      </View>
    </>
  );
};

export default Dashboard;
