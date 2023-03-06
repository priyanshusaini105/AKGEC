import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react'
import ScreenWithBackButtonView from '../../components/ScreenWithBackButtonView';
import { StarBg } from '../../svg';
import tw from '../../lib/tw';
import { INotice } from '../../constants/types';
import { StackNavigationProp } from '@react-navigation/stack';
import { TStackNavType } from '../../navigation/types';



const notices: INotice[] = [
  {
    id: 1,
    title: 'Welcome to the new academic year!',
    description: 'We are excited to start the new academic year with you. Please make sure to attend all the orientation sessions and familiarize yourself with the college policies.',
    date: '2022-09-01',
    isImportant: true,
    isRead: false,
  },
  {
    id: 2,
    title: 'Change in timetable for next week',
    description: 'Due to some unforeseen circumstances, the timetable for next week has been changed. Please check your student portal for the updated timetable.',
    date: '2022-09-15',
    isImportant: false,
    isRead: false,
  },
  {
    id: 3,
    title: 'Fee payment deadline extension',
    description: 'The deadline for fee payment for the current semester has been extended to October 15th. Please make sure to clear your dues before the deadline to avoid any inconvenience.',
    date: '2022-09-20',
    isImportant: true,
    isRead: true,
  },
  {
    id: 4,
    title: 'Career counseling session',
    description: 'There will be a career counseling session for final year students on October 1st. Please register yourself through the student portal if you are interested in attending.',
    date: '2022-09-25',
    isImportant: true,
    isRead: false,
  },
  {
    id: 5,
    title: 'Holiday notice',
    description: 'The college will remain closed on October 2nd on account of Gandhi Jayanti. Enjoy your day off!',
    date: '2022-10-01',
    isImportant: false,
    isRead: true,
  },
];



const Notice = ({ navigation }: { navigation: StackNavigationProp<TStackNavType> }) => {
  return (
    <ScreenWithBackButtonView label="Notices" >
      <>
        <StarBg />
        <View style={tw`roundedLayout pt-2`}>
          <ScrollView>
            {notices.sort((a, b) => {
              return new Date(b.date).getTime() - new Date(a.date).getTime();
            }).map(notice => (
              <TouchableOpacity key={notice.id} style={tw`flex-row justify-between items-center p-4 m-2 rounded-xl border border-gray-300`} onPress={() => navigation.navigate("NoticeBoard", { notice })}>
                <View style={tw`w-4/5`}>
                  <Text style={tw`text-lg font-nunito-bold text-gray-800`}>{notice.title}</Text>
                  <Text style={tw`text-sm text-gray-500`}>{notice.date}</Text>
                </View>
                {notice.isImportant && <Text style={tw`text-sm text-red-500`}>Important</Text>}
              </TouchableOpacity>
            ))}
          </ScrollView>
          <View style={tw`h-50`} />
        </View>
      </>
    </ScreenWithBackButtonView>
  )
}

export default Notice