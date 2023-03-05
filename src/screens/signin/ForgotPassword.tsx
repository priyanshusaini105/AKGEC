import {
  View,
  Text,
  useWindowDimensions,
  Alert,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import {SignInBg} from '../../svg';
import {IButton, TextInput, KeyboardHide, ScreenWithBackButtonView} from '../../components';
import {useForm} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import auth from '@react-native-firebase/auth';
import {TStackNavType} from '../../navigation/types';
import { ResuasbleStyles } from '../../constants';
import tw from '../../lib/tw';

const EMAIL_REGEX: RegExp =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(akgec.ac.in)\s*$/;


const {roundedLayout}=ResuasbleStyles;


const ForgotPassword = () => {
  // activity indicator loading state
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {navigate} = useNavigation<StackNavigationProp<TStackNavType>>();

  // setting react form hook>>==================>>

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      email: '',
    },
  });

  // getting login credentials on submit
  const onSubmit = (data: {email: string}) => {
    const {email} = data;
    setIsLoading(true);
    auth()
      .sendPasswordResetEmail(email.trim())
      .then(userCredentials => {
        setIsLoading(false);
        Alert.alert(
          'Password Reset Email Sent',
          'Please check your email to reset your password',
          [
            {
              text: 'OK',
              onPress: () => navigate('SignIn'),
            },
          ],
        );
        console.log(userCredentials);
        setIsLoading(false);
      })
      .catch(err => {
        console.log(err);
        setIsLoading(false);
        Alert.alert(err.message);
      });
  };

  // getting windows dimensio s
  const {height} = useWindowDimensions();

  return (
    <KeyboardHide>
      <ScreenWithBackButtonView>
        <View style={{height}}>
          <View style={tw`h-4/15 justify-around z-5 `}>
            <View></View>
            <SignInBg style={tw`top-10 ml-5`} />
          </View>
          <View style={[roundedLayout,tw`h-11/15 p-10`]}>
            <Text style={tw`font-nunito-bold text-slate-700 text-7 mt-8`}>
              Forgot Password ?
            </Text>

            <Text style={tw`font-nunito text-slate-400 text-5 mt-2`}>
              Don't worry, Enter E-mail
            </Text>
            {/* email input*/}
            <TextInput
              style={tw`border-${errors.email ? 'red' : 'slate'}-400`}
              placeholder="E-mail"
              labelStyle={tw`mt-10`}
              label="College E-mail"
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
            <IButton onPress={handleSubmit(onSubmit)} style={tw`my-12`}>
              Send Confirmation E mail
            </IButton>
          </View>
          <View
            style={tw`absolute w-full h-full items-center justify-center ${
              isLoading ? 'bg-slate-400 opacity-40' : 'hidden'
            }`}>
            <ActivityIndicator
              color="#345FB4"
              animating={isLoading}
              size="large"
            />
          </View>
        </View>
      </ScreenWithBackButtonView>
    </KeyboardHide>
  );
};

export default ForgotPassword;
