import { View, Text, ViewStyle, TouchableOpacity } from 'react-native';
import React from 'react'
import { StyleProp ,TextStyle} from 'react-native/types';
import tw from '../lib/tw';


type Props = {
    children: string;
    style?:StyleProp<ViewStyle>;
    textStyle?:StyleProp<TextStyle>;
    onPress:()=>void;
}

const IButton = ({children,style,onPress}:Props) => {
  return (
    <TouchableOpacity style={[tw`bg-primary p-3 my-8 rounded-xl`,style]} onPress={()=>onPress()}>
      <Text style={tw`text-center font-nunito-bold text-lg text-white`}>{children}</Text>
    </TouchableOpacity>
  )
}

export default IButton