import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import tw from 'twrnc'
import { IntroSvg } from '../../svg';

const SplashScreen = () => {
  return (
    <LinearGradient colors={['#2855AE', '#7292CF',]} style={{ ...tw`h-full w-full`, }}>
      <View style={{...tw`m-auto`}}>
        <Text style={{ ...tw`text-center text-10` }}>AKGEC</Text>
        <Text style={{ ...tw`text-center text-8` }}>ERP</Text>
      </View>
      <View><IntroSvg /></View>
    </LinearGradient>
  )
}

export default SplashScreen