import { View, Text, Image } from 'react-native'
import React from 'react'
import { StarBg } from '../../svg'
import { ScreenWithBackButtonView } from '../../components'
import { TStackNavType } from '../../navigation/types'
import { RouteProp } from '@react-navigation/native'
import tw from '../../lib/tw'
import { ScrollView } from 'react-native-gesture-handler'

interface Props {
  route: RouteProp<TStackNavType, 'EventDetails'>
}

const EventDetails = ({ route }: Props) => {
  const { event } = route.params
  return (
    <ScreenWithBackButtonView label={event.name+" Details"}>
      <>
        <StarBg />
        <View style={tw`roundedLayout h-full`}>
          <Text style={tw`text-primary underline font-nunito-bold  text-center text-7 m-5`}>{event.name}</Text>
          <View style={tw`border border-gray-200  -mx-3 shadow-lg shadow-blue-900`} />
          <ScrollView contentContainerStyle={tw`items-center pb-60 mt-2`} scrollEnabled>
            <View style={tw`shadow-lg rounded-lg shadow-primary self-center`}>
              <Image
                source={{ uri: event.image }}
                style={tw`w-80 h-40 rounded-lg`}
              />
            </View>
            <View>
              <Text style={tw`text-primary font-nunito-bold  text-center text-5 m-5`}>{event.description}</Text>
              <Text style={tw`text-primary font-nunito-bold  text-center text-5 m-5`}>Date: {event.date}</Text>
              <Text style={tw`text-primary font-nunito-bold  text-center text-5 m-5`}>Time: {event.time}</Text>
              <Text style={tw`text-primary font-nunito-bold  text-center text-5 m-5`}>Location: {event.location}</Text>
              <View style={tw`flex-row justify-between mx-3 gap-1`}>
                <View style={tw`w-4/10`}>
                  <Text style={tw`text-slate-500 font-nunito  text-left text-3`}>Organizer:</Text>
                  <Text style={tw`text-primary font-nunito-semibold  text-left text-[3.5] underline`}>{event.organizer.name}</Text>
                </View>
                <View style={tw`w-4/10`}>
                  <Text style={tw`text-slate-500 font-nunito  text-right text-3`}>Email:</Text>
                  <Text style={tw`text-primary font-nunito-semibold  text-right text-[3.5]`}>{event.organizer.email}</Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>

      </>
    </ScreenWithBackButtonView>
  )
}

export default EventDetails