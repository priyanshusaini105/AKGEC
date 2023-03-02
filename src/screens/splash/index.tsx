import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { IntroSvg } from '../../svg';
import tw from '../../lib/tw';

const SplashScreen = () => {
  return (
    <LinearGradient colors={['#2855AE', '#7292CF',]} style={{ ...tw`h-full w-full`, }}>
      <View style={{...tw`m-auto bg-white rounded-full p-8 shadow-lg shadow-blue-500 border`}}> 
        <Text style={{ ...tw`text-center text-secondary-solid text-8 font-nunito-bold underline bg-secondary-light rounded-full p-4 tracking-wide` }}>AKGEC</Text>
        <Text style={{ ...tw`text-center text-5 font-nunito tracking-wide text-[#DD50F2] bg-[#DD50F230] m-2 rounded-full p-1` }}>ERP</Text>
      </View>
      <View><IntroSvg /></View>
    </LinearGradient>
  )
}

export default SplashScreen