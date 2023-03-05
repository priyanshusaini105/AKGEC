import { View, Text, ScrollView } from 'react-native';
import React from 'react'
import { Tdays } from '../../constants/types';
import tw from '../../lib/tw';
import { RouteProp } from '@react-navigation/native';
import { TopTabTimetableParamList } from '../../navigation/types';

type TimeTableScreenRouteProp = RouteProp<TopTabTimetableParamList, Tdays>;


interface Props {
    route: TimeTableScreenRouteProp;
}

const TimeTableScreen = ({ route }: Props) => {
    const { timetableItem } = route.params
    return (
        <>
            <ScrollView style={[tw`bg-white p-2 pb-5`]}>
                {
                    timetableItem.list.map(list => (
                        <View style={tw`border border-gray-300 rounded-xl p-2 m-2`} key={list.periodNo}>
                            <Text style={tw`font-nunito text-gray-800
                        `}>{list.subject}</Text>
                            <Text style={tw`font-nunito text-gray-500 text-sm`}>{list.time}</Text>
                            <View style={tw`border border-gray-200 my-2`} />
                            <View style={tw`flex-row justify-between`}>
                                <Text style={tw`font-nunito text-gray-800`}>{list.teacher}</Text>
                                <Text style={tw`font-nunito text-gray-500 text-sm`}>Period: {list.periodNo}</Text>
                            </View>
                        </View>
                    ))
                }
            </ScrollView>
            <View style={tw`h-63 bg-white`}/>
        </>
    )
}

export default TimeTableScreen