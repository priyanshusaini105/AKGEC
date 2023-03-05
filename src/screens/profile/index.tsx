import {View, Text} from 'react-native';
import React from 'react';
import {ScreenWithBackButtonView} from '../../components';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import tw from '../../lib/tw';
import {StarBg} from '../../svg';

type Props = {};

const Profile = (props: Props) => {
  const profileData = useSelector(
    (state: RootState) => state.studentData.studentInfo,
  );
  console.log(profileData);
  return (
    <ScreenWithBackButtonView label='My Profile'>
      <>
        <StarBg />
        <View style={tw`roundedLayout pb-10`}>
          <View style={tw`border `}>
            <Text
              style={tw`text-black
          font-nunito ml-18 mt-4`}>
              Name
            </Text>
            <Text style={tw`text-black font-nunito mr-18 mt-4`}>
              {profileData.name}
            </Text>
          </View>

          <View style={tw`flex-row justify-between items-center`}>
            <Text
              style={tw`text-black
          font-nunito ml-18 mt-4`}>
              Name
            </Text>
            <Text style={tw`text-black font-nunito mr-18 mt-4`}>
              {profileData.name}
            </Text>
          </View>
          <View style={tw`flex-row justify-between items-center`}>
            <Text
              style={tw`text-black
          font-nunito ml-18 mt-4`}>
              Email
            </Text>
            <Text style={tw`text-black font-nunito mr-18 mt-4`}>
              {profileData.email}
            </Text>
          </View>
          <View style={tw`flex-row justify-between items-center`}>
            <Text
              style={tw`text-black
          font-nunito ml-18 mt-4`}>
              Phone
            </Text>
            <Text style={tw`text-black font-nunito mr-18 mt-4`}>
              {profileData.phone}
            </Text>
          </View>
          <View style={tw`flex-row justify-between items-center`}>
            <Text
              style={tw`text-black
          font-nunito ml-18 mt-4`}>
              Address
            </Text>
            <Text style={tw`text-black font-nunito mr-18 mt-4`}>
              {profileData.address}
            </Text>
          </View>
          <View style={tw`flex-row justify-between items-center`}>
            <Text
              style={tw`text-black
          font-nunito ml-18 mt-4`}>
              City
            </Text>
            <Text style={tw`text-black font-nunito mr-18 mt-4`}>zsxfchbjn</Text>
          </View>
        </View>
      </>
    </ScreenWithBackButtonView>
  );
};

export default Profile;
