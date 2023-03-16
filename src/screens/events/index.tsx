import { View, Text, FlatList, Image } from 'react-native';
import React from 'react'
import { ScreenWithBackButtonView } from '../../components'
import { StarBg } from '../../svg'
import tw from '../../lib/tw'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { IEvent } from '../../constants/types';
import { StackNavigationProp } from '@react-navigation/stack';
import { TStackNavType } from '../../navigation/types';

const EventsList = ({navigation}:{navigation:StackNavigationProp<TStackNavType>}) => {
    const eventsData:{events:IEvent[]} = {
        "events": [
            {
                "id": 1,
                "name": "Freshers' Party",
                "description": "Welcome party for new students",
                "date": "2023-08-15",
                "time": "18:00",
                "location": "College Auditorium",
                "image": "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg",
                "organizer": {
                    "name": "Student Council",
                    "email": "council@akgec.com"
                }
            },
            {
                "id": 2,
                "name": "Tech Fest",
                "description": "Annual technology festival",
                "date": "2023-11-10",
                "time": "09:00",
                "location": "College Campus",
                "image": "https://images.pexels.com/photos/1763067/pexels-photo-1763067.jpeg",
                "organizer": {
                    "name": "Department of Computer Science",
                    "email": "csdept@akgec.com"
                }
            },
            {
                "id": 3,
                "name": "Cultural Fest",
                "description": "Annual cultural festival",
                "date": "2024-03-15",
                "time": "17:00",
                "location": "College Grounds",
                "image": "https://images.pexels.com/photos/154147/pexels-photo-154147.jpeg",
                "organizer": {
                    "name": "Department of Humanities",
                    "email": "humdept@akgec.com"
                }
            },
        ]
    }

    return (
        <ScreenWithBackButtonView label='Events'>
            <>
                <StarBg />
                <View style={tw`roundedLayout h-full`}>
                    <Text style={tw`text-primary underline font-nunito-bold  text-center text-7 m-5`}>Events</Text>
                    <View style={tw`border border-gray-200  -mx-3 shadow-lg shadow-blue-900`} />
                    <FlatList
                        data={eventsData.events}
                        keyExtractor={(item) => item.id.toString()}
                        scrollEnabled
                        contentContainerStyle={tw`pb-61`}
                        renderItem={({ item:event }) => (
                            <View style={tw`bg-white flex-row shadow-lg shadow-primary p-5 m-5 rounded-lg justify-between items-center`}>
                                <View>
                                    <Text style={tw`text-5 text-gray-600 font-nunito-bold underline mb-2`}>{event.name}</Text>
                                    <Text style={tw`text-[3.5] text-sky-600 font-nunito`}>Date: {event.date}</Text>
                                </View>
                                <TouchableOpacity onPress={()=>navigation.navigate("EventDetails",{event})}>
                                    <Text style={tw`text-primary text-4`}>View &#10148;</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                    />
                </View>
            </>
        </ScreenWithBackButtonView>
    )
}

export default EventsList