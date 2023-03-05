import {
  View,
  Text,
  useWindowDimensions,
  Alert,
  ActivityIndicator,
} from 'react-native';
import React, { useState } from 'react';
import { BottomSvg, SignInBg } from '../../svg';
import { IButton, TextInput, KeyboardHide, ScreenWithBackButtonView } from '../../components';
import { useForm } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import auth from '@react-native-firebase/auth';
import { TStackNavType } from '../../navigation/types';
import { ResuasbleStyles } from '../../constants';
import tw from '../../lib/tw';

const PASS_REGEX = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;





const ForgotPassword = () => {
  // activity indicator loading state
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { navigate } = useNavigation<StackNavigationProp<TStackNavType>>();

  // setting react form hook>>==================>>

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
    reset 
  } = useForm({
    defaultValues: {
      newPassword:'', oldPassword:'', newPasswordRepeat:'',
    },
  });

  // getting login credentials on submit
  const onSubmit = async(data: { newPassword: string, oldPassword: string; newPasswordRepeat: string; }) => {
    const { newPassword, oldPassword, newPasswordRepeat, } = data;
    setIsLoading(true);
    const user = auth().currentUser;
    if (!user) {
      Alert.alert('Error', 'User not authenticated');
      return;
    }
    try {
      const credential = auth.EmailAuthProvider.credential(
        user.email,
        oldPassword,
      );
      await user.reauthenticateWithCredential(credential);
      await user.updatePassword(newPassword);
      Alert.alert('Success', 'Password changed successfully');
      setIsLoading(false);
      navigate('Dashboard');
      reset();
    } catch (error:any) {
      Alert.alert('Error', error.message);
      setIsLoading(false);
    }
  };

  // getting windows dimensio s
  const { height } = useWindowDimensions();
  return (
    <KeyboardHide>
      <ScreenWithBackButtonView>
        <View style={{ height }}>
          <View style={tw`h-4/15 justify-around z-5`}>
            <View><Text style={tw`font-nunito text-lg ml-14 mt-6`}>Change Password</Text></View>
            <SignInBg style={tw`top-4 ml-5`} />
          </View>
          <View style={tw`h-11/15 roundedLayout justify-between`}>
            <View style={tw`px-10`}>

              <Text style={tw`font-nunito-bold text-slate-700 text-7 mt-8`}>
                Change Password
              </Text>
              {/*old password  */}
              <TextInput
                style={tw`border-${errors ? 'red' : 'slate'}-400`}
                placeholder="Old Password"
                labelStyle={tw`mt-2`}                
                label="Old Password"
                name="oldPassword"
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
              {errors.oldPassword && (
                <Text style={tw`font-nunito text-red-400 text-3 ml-1`}>
                  *{errors.oldPassword.message || 'Password is required.'}
                </Text>
              )}
              <View style={tw`opacity-40 my-4 -mx-3`} />
              {/* new password  */}
              <TextInput
                style={tw`border-${errors.newPassword ? 'red' : 'slate'}-400`}
                placeholder="New Password"
                labelStyle={tw`mt-2`}
                label="New Password"
                name="newPassword"
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
                  validate: (val) => {
                    if (watch("oldPassword") === val) {
                        return "Passwords Must Be Different";
                    }
                },
                }}
              />
              {errors.newPassword && (
                <Text style={tw`font-nunito text-red-400 text-3 ml-1`}>
                  *{errors.newPassword.message || 'Password is required.'}
                </Text>
              )}
              {/* password  repeat */}
              <TextInput
                style={tw`border-${errors.newPasswordRepeat ? 'red' : 'slate'}-400`}
                placeholder="Repeat Password"
                label="Repeat Password"
                name="newPasswordRepeat"
                labelStyle={tw`mt-5`}
                autoComplete="password"
                keyboardType="default"
                secureTextEntry={true}
                placeholderTextColor={tw`text-slate-500`.color.toString()}
                control={control}
                rules={{
                  required: true,
                  validate: (val) => {
                      if (watch("newPassword") != val) {
                          return "Your passwords do no match";
                      }
                  },
                }}
              />
              {errors.newPasswordRepeat && (
                <Text style={tw`font-nunito text-red-400 text-3 ml-1`}>
                  *{errors.newPasswordRepeat.message || 'Password is required.'}
                </Text>
              )}
              <IButton onPress={handleSubmit(onSubmit)} style={tw`mt-8`}>
                Change Password
              </IButton>
            </View>
            <BottomSvg />
          </View>
          <View
            style={tw`absolute w-full h-full items-center justify-center ${isLoading ? 'bg-slate-400 opacity-40' : 'hidden'
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
