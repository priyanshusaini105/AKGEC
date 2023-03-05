import {View,Image, Text} from 'react-native';
import React from 'react';
import {ScreenWithBackButtonView} from '../components';
import {
  Circle,
  Ellipse,
  G,
  Path,
  Polygon,
  Polyline,
  Svg,
} from 'react-native-svg';
import tw from '../lib/tw';

const UnderConstruction = () => {
  return (
    <ScreenWithBackButtonView label='UnderConstruction'>
      <View style={tw`items-center justify-center relative`}>
        <Image
          style={tw`w-50 h-40 my-20`}
          source={require('../assets/img/construction.png')}
        />
        <Text style={tw`text-7 m-2 my-5 font-nunito-bold text-orange-400`}>Pardon the dust, This portion is under Construction!</Text>
      </View>
    </ScreenWithBackButtonView>
  );
};

export default UnderConstruction;
