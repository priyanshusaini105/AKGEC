import { Text, TextInput as RNTextInput, View, TouchableOpacity } from 'react-native';
import {Controller} from 'react-hook-form';
import type {ITextInputProps} from './types';
import { EyeIcon } from '../svg/Icons';
import { useState } from 'react';
import tw from '../lib/tw';

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
          <Text style={[tw`text-slate-400 text-3`,labelStyle]}>{label}</Text>
          <View style={tw`border-b border-slate-200 flex-row justify-between font-nunito`}>
            <RNTextInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              clearButtonMode="while-editing"
              style={[tw`text-slate-700 p-1 w-9/10 font-nunito-semibold`, style]}
              {...props}
              secureTextEntry={!openEye}
            />
            {name.toLowerCase().includes("password") &&<TouchableOpacity onPress={()=>setOpenEye(!openEye)}><EyeIcon openEye={openEye}/></TouchableOpacity>}
          </View>
        </>
      )}
    />
  );
};

export default TextInput;
