import { View, Text } from 'react-native'
import React from 'react'
import { ScreenWithBackButtonView } from '../../components'
import { StarBg } from '../../svg'
import tw from '../../lib/tw'
import { RouteProp } from '@react-navigation/native'
import { TStackNavType } from '../../navigation/types'

interface Props {
    route: RouteProp<TStackNavType, 'Mess'>
}

const Mess = ({ route }: Props) => {
    const { messData } = route.params
    console.log(messData)
    return (
        <ScreenWithBackButtonView label='mess'>
            <>
                <StarBg />
                <View style={tw`roundedLayout h-full`}>
                    <Text style={tw`text-primary underline font-nunito-bold  text-center text-7 m-5`}>{messData?.name}</Text>
                    <View style={tw`border border-gray-200  -mx-3 shadow-lg shadow-blue-900`} />
                    <View>
                        <Text style={tw`text-primary font-nunito-bold  text-center text-5 m-5`}>{messData?.manager.name}</Text>
                        <Text style={tw`text-primary font-nunito-bold  text-center text-5 m-5`}>{messData?.manager.phone}</Text>
                        <Text style={tw`text-primary font-nunito-bold  text-center text-5 m-5`}>{messData?.manager.email}</Text>
                    </View>
                    <View>
                        
                    </View>
                </View>
            </>
        </ScreenWithBackButtonView>
    )
}

export default Mess