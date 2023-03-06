import { View, Text } from 'react-native'
import React from 'react'
import {ScreenWithBackButtonView} from '../../components';
import ResultBgSvg from '../../svg/ResultBg';
import tw from '../../lib/tw';

const Result = () => {
  return (
    <ScreenWithBackButtonView label='Result' labelStyle={tw`absolute`}>
      <>
        <ResultBgSvg/>
        <View style={tw`roundedLayout h-full -top-7`}>

        </View>
      </>
    </ScreenWithBackButtonView>
  )
}

export default Result