import React from 'react'
import ScreenWithBackButtonView from '../../components/ScreenWithBackButtonView';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import tw from '../../lib/tw';
import { StarBg } from '../../svg';
import { ISubjectList } from '../../constants/types';
import { StackNavigationProp } from '@react-navigation/stack';
import { TStackNavType } from '../../navigation/types';

const Assignments = ({navigation}:{navigation:StackNavigationProp<TStackNavType>}) => {


  const subjectList: Array<ISubjectList> = [
    { name: "Engineering Mathematics-1", code: "BAS-101" },
    { name: "Physics", code: "BAS-102" },
    { name: "Chemistry", code: "BAS-103" },
    { name: "Engineering Drawing", code: "BAS-104" },
    { name: "Computer Programming", code: "BAS-105" },
    { name: "Communicative English", code: "BAS-106" },
  ];



  return (
    <ScreenWithBackButtonView label='Assignemnts'>
      <>
        <StarBg />
        <View style={tw`roundedLayout -top-2 py-4 h-full`}>
          <ScrollView scrollEnabled >
            {subjectList.map((subject, index) => (
              <View key={subject.code} style={tw`flex-row justify-between items-start px-4 py-2 m-2 mx-4 border bg-white border-gray-200 rounded-xl`}>
                <View style={tw`items-start justify-start`}>
                  <Text style={tw`text-3 font-nunito-semibold text-blue-500 bg-blue-50 rounded-2 p-1 px-2 self-start`}>{subject.code}</Text>
                  <Text style={tw`text-gray-700 font-nunito my-2`}>{subject.name}</Text>
                </View>
                <View style={tw``}>
                  <Text style={tw`text-gray-500 font-nunito`}>Recent Assign: </Text>
                  <Text style={tw`text-gray-500 font-nunito m-1 self-end`}>22-5-2023</Text>
                  <TouchableOpacity onPress={()=>navigation.navigate("AssignmentScreen",{subject})}>
                    <Text style={tw`text-blue-500 font-nunito self-end text-4`}>View &gt;</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </ScrollView>

        </View>
      </>
    </ScreenWithBackButtonView>

  )
}

export default Assignments