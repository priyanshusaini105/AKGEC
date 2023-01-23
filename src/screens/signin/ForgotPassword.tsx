import {
  View,
  Text,
  useWindowDimensions,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import tw from 'twrnc';
import {SignInBg} from '../../svg';
import {IButton, TextInput, KeyboardHide} from '../../components';
import {useForm} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import auth from '@react-native-firebase/auth';
import BackButton from '../../components/BackButton';

const EMAIL_REGEX: RegExp =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(akgec.ac.in)$/;
const PASS_REGEX = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

export type RootStackParamList = {
  SignIn: undefined;
};

const ForgotPassword = () => {
  // activity indicator loading state
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {navigate} = useNavigation<StackNavigationProp<RootStackParamList>>();

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
      .sendPasswordResetEmail(email)
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
      <BackButton>
        <View style={{height}}>
          <View style={tw`h-4/15 justify-around z-5 `}>
            <View></View>
            <SignInBg style={tw`top-10 ml-5`} />
          </View>
          <View style={tw`bg-white h-11/15 rounded-t-10 p-10`}>
            <Text style={tw`text-slate-700 text-7 font-bold mt-8`}>
              Forgot Password ?
            </Text>

            <Text style={tw`text-slate-400 text-5 mt-2`}>
              Don't worry, Enter E-mail
            </Text>
            {/* email input*/}
            <TextInput
              style={tw`border-${errors.email ? 'red' : 'slate'}-400`}
              placeholder="E-mail"
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
              <Text style={tw`text-red-400 text-3 ml-1`}>
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
      </BackButton>
    </KeyboardHide>
  );
};

export default ForgotPassword;
