import tw from 'twrnc';
import { Text, View, TouchableOpacity } from 'react-native';
import {Theme} from '../../constants';
import {IStudentDataType} from '../../constants/types';
import {useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { IStackNavType } from '../../navigation/types';
const {colors} = Theme;



export default function DashboardHeader({
  studentData,
}: {
  studentData: IStudentDataType;
}) {


const navigation=useNavigation<StackNavigationProp<IStackNavType>>();

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
  // adding Suffix to the number
  const addSuffix: (num: number | null) => string = num =>
    num ? num + suffix[num - 1] : suffix[8];
  return (
    <View style={{...tw`flex-row justify-between p-4 pt-10 items-center`}}>
      {/* Header */}
      <View>
        <Text style={{...tw`text-6`}}>Hi, {studentData.studentInfo.name}</Text>
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
      <TouchableOpacity
      onPress={()=>navigation.navigate("Profile")}
        style={{
          ...tw`bg-gray-500 h-13 w-13 rounded-full border border-white`,
        }}></TouchableOpacity>
    </View>
  );
}
