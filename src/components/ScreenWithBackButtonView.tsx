import { View, TouchableOpacity, StyleProp , Text} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Svg, { Path } from 'react-native-svg';
import { ViewStyle, TextStyle } from 'react-native/types';
import tw from '../lib/tw';

const ScreenWithBackButtonView = ({ children, style, label,labelStyle }: { children: JSX.Element, style?: StyleProp<ViewStyle>, labelStyle?: StyleProp<TextStyle>, label?: string; }) => {
  const navigation = useNavigation();
  return (
    <View style={style}>
      <TouchableOpacity
        style={tw`self-start m-4 absolute z-5`}
        onPress={() => navigation.goBack()}>
        <Svg
          fill='#fff'
          width='30px'
          height='30px'
          viewBox='-78.5 0 512 512'
        >
          <Path d='M257 64L291 98 128 262 291 426 257 460 61 262 257 64Z' />
        </Svg>
      </TouchableOpacity>
      <Text style={[tw`text-xl self-start m-4 ml-13 z-4 font-nunito`,labelStyle]} ellipsizeMode="tail" numberOfLines={1}>{label}</Text>
      {children}
    </View>
  );
};

export default ScreenWithBackButtonView;
