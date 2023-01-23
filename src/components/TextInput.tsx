import { Text, TextInput as RNTextInput, View, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import {Controller} from 'react-hook-form';
import type {ITextInputProps} from './types';
import { EyeIcon } from '../svg/Icons';
import { useState } from 'react';

const TextInput = ({
  style,
  labelStyle,
  containerStyle,
  label,
  control,
  rules,
  name,
  ...props
}: ITextInputProps) => {
  const [openEye, setOpenEye] = useState<boolean>(false)
  return (
    <Controller
      control={control}
      rules={rules}
      name={name}
      render={({field: {onChange, onBlur, value}}) => (
        <>
          <Text style={{...tw`text-slate-400 text-3 mt-10`}}>{label}</Text>
          <View style={tw`border-b border-slate-200 flex-row justify-between`}>
            <RNTextInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              clearButtonMode="while-editing"
              style={[tw`text-slate-700 p-1 w-9/10`, style]}
              {...props}
              secureTextEntry={!openEye}
            />
            {name==="password" &&<TouchableOpacity onPress={()=>setOpenEye(!openEye)}><EyeIcon openEye={openEye}/></TouchableOpacity>}
          </View>
        </>
      )}
    />
  );
};

export default TextInput;
