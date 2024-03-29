import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react'
import ScreenWithBackButtonView from '../../components/ScreenWithBackButtonView';
import StarBg from '../../svg/StarBg';
import tw from '../../lib/tw';
import { RouteProp } from '@react-navigation/native';
import { TStackNavType } from '../../navigation/types';


interface Props {
  route: RouteProp<TStackNavType, 'NoticeBoard'>;
}

const NoticeBoard = ({ route }: Props) => {
  const { notice } = route.params
  return (
    <ScreenWithBackButtonView label={notice.title}>
      <>
        <StarBg />
        <View style={tw`roundedLayout px-5 h-full`}>
          <Text style={tw`text-primary underline font-nunito-bold  text-center text-7 m-5`}>Notice Board</Text>
          <View style={tw`border border-gray-200  -mx-3 shadow-lg shadow-blue-900`} />
          <ScrollView>
            <Text style={tw`font-nunito text-2xl text-gray-800 text-center tracking-wide m-2`}>{notice.title}</Text>
            <Text style={tw`font-nunito text-orange-400 text-sm`}>{new Date(notice.date).toDateString()}</Text>
            <View style={tw`border border-gray-100 my-2`} />
            <Text style={tw`font-nunito text-gray-800 text-4 tracking-wide`}>{notice.description}</Text>
          </ScrollView>
          {true&&<TouchableOpacity>
            <Text style={tw`font-nunito-semibold text-blue-700 bg-blue-200 self-center rounded-xl p-2 text-4 underline m-2`}>🔗 See Attechments</Text>
          </TouchableOpacity>}
          <View style={tw`h-64`} />
        </View>
      </>
    </ScreenWithBackButtonView>
  )
}

export default NoticeBoard