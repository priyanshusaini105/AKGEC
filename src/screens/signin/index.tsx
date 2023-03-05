import {
  View,
  Text,
  useWindowDimensions,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import React, { useState } from 'react';
import { SignInBg } from '../../svg';
import { IButton, TextInput, KeyboardHide } from '../../components';
import { useForm } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import auth from '@react-native-firebase/auth';
import { TStackNavType } from '../../navigation/types';
import { ResuasbleStyles } from '../../constants';
import tw from '../../lib/tw';

const EMAIL_REGEX: RegExp =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(akgec.ac.in)\s*$/;
const PASS_REGEX = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

const { roundedLayout } = ResuasbleStyles;


const SignIn = () => {
  // activity indicator loading state
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const navigation = useNavigation<StackNavigationProp<TStackNavType>>();

  // setting react form hook>>==================>>

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  // getting login credentials on submit
  const onSubmit = (data: { email: string; password: string }) => {
    const { email, password } = data;
    setIsLoading(true);
    auth()
      .signInWithEmailAndPassword(email.trim(), password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log(user.getIdToken());
        if (user) navigation.replace('Dashboard');
        setIsLoading(false);
      })
      .catch(err => {
        console.log(err);
        setIsLoading(false);
        Alert.alert(err.message);
      });
  };

  // forgot password
  const handleForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };

  // getting windows dimensio s
  const { height } = useWindowDimensions();

  return (
    <KeyboardHide>
      <View style={{ height }}>
        <View style={tw`h-4/15 justify-around z-5 `}>
          <View></View>
          <SignInBg style={tw`top-10 ml-5`} />
        </View>
        <View style={[roundedLayout, tw`h-11/15 p-10`]}>
          <Text style={tw`font-nunito-bold text-slate-700 text-7 mt-8`}>
            Hi, Student
          </Text>

          <Text style={tw`font-nunito text-slate-400 text-5 mt-2`}>
            Sign in to continue
          </Text>
          {/* email input*/}
          <TextInput
            labelStyle={tw`mt-10`}
            style={tw`border-${errors.email ? 'red' : 'slate'}-400`}
            placeholder="E-mail"
            label="College E-mail/Student Id"
            name="email"
            autoComplete="email"
            keyboardType="email-address"
            secureTextEntry={false}
            placeholderTextColor={tw`text-slate-500`.color.toString()}
            control={control}
            rules={{
              required: true,
              pattern: {
                value: EMAIL_REGEX,
                message: 'Invalid Email / Enter college Email only',
              },
            }}
          />
          {errors.email && (
            <Text style={tw`font-nunito text-red-400 text-3 ml-1`}>
              *{errors.email.message || 'E-mail is required!'}
            </Text>
          )}

          {/* password  */}
          <TextInput
            labelStyle={tw`mt-10`}
            style={tw`border-${errors.password ? 'red' : 'slate'}-400`}
            placeholder="Password"
            label="Password"
            name="password"
            autoComplete="password"
            keyboardType="default"
            secureTextEntry={true}
            placeholderTextColor={tw`text-slate-500`.color.toString()}
            control={control}
            rules={{
              required: true,
              pattern: {
                value: PASS_REGEX,
                message:
                  'Password must have min 8 and max 18 characters, with at least a symbol,a upper and a lower case characters and a number',
              },
            }}
          />
          {errors.password && (
            <Text style={tw`font-nunito text-red-400 text-3 ml-1`}>
              *{errors.password.message || 'Password is required.'}
            </Text>
          )}
          {/* forgo password */}
          <TouchableOpacity style={tw`self-end`}>
            <Text
              style={tw`text-slate-500`}
              onPress={() => handleForgotPassword()}>
              Forgot Password ?
            </Text>
          </TouchableOpacity>
          <IButton onPress={handleSubmit(onSubmit)}>SIGN IN</IButton>
        </View>
        {/* loader */}
        <View
          style={tw`absolute w-full h-full ${isLoading ? 'bg-slate-400 opacity-50' : 'hidden'
            }`}></View>
        <View
          style={tw`absolute w-full h-full items-center justify-center z-99 ${isLoading ? '' : 'hidden'
            }`}>
          <ActivityIndicator
            color="#345FB4"
            animating={isLoading}
            size="large"
          />
        </View>
      </View>
    </KeyboardHide>
  );
};

export default SignIn;
