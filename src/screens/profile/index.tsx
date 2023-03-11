import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { ScreenWithBackButtonView } from '../../components';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import tw from '../../lib/tw';
import { BottomSvg, ProfileIcon, StarBg } from '../../svg';
import { FlatList } from 'react-native-gesture-handler';



const Profile = () => {
  const { name, studentId, email, phone, dob, sem, address, gender } = useSelector(
    (state: RootState) => state.studentData.studentInfo,
  );
  const data = {
    Name: name,
    'Student Id': studentId,
    'Date of Birth': dob,
    Gender: gender,
    Semester: sem,
    'Phone Number': phone,
    Address: address,
    "":"",
    Email: email,
  }


  return (
    <ScreenWithBackButtonView label='My Profile'>
      <>
        <StarBg />
        <View style={tw`roundedLayout h-full`}>
          <Text style={tw`text-primary underline font-nunito-bold  text-center text-7 m-5`}>Profile</Text>
          <View style={tw`border border-gray-200  -mx-3 shadow-lg shadow-blue-900`} />
          <View style={tw`border border-primary rounded-2xl m-2 p-2 flex-row`}>
            <TouchableOpacity style={tw`bg-gray-500 w-25 h-25 rounded-2xl items-center justify-center`}>
              <ProfileIcon width={80} height={180} fill="#fff"/>
            </TouchableOpacity>
            <View style={tw` m-3 justify-center`}>
              <Text style={tw`text-black text-left text-xl font-nunito-bold`}>{name}</Text>
              <Text style={tw`text-gray-400 text-center`}> Semester:{sem} | Student-Id:{studentId}</Text>
            </View>
          </View>
          <FlatList
            data={Object.entries(data)}
            // ListHeaderComponent={}
            renderItem={({ item }) => (
              <View style={tw`justify-between self-center min-w-2/5 m-2 mx-4`} key={item[0]}>
                <Text style={tw`text-gray-500 font-nunito`}>{item[0]}</Text>
                <Text style={tw`text-black font-nunito-semibold tracking-wide text-4 p-2`}>{item[1]}</Text>
                <View style={tw`border  border-gray-400 mt-1 -mx-1`} />
              </View>
            )}
            scrollEnabled
            keyExtractor={(item) => item[0]}
            contentContainerStyle={tw`pb-61 p-2 items-center`}
            numColumns={2}
          />
        </View>
        <BottomSvg/>
      </>
    </ScreenWithBackButtonView>
  );
};

export default Profile;
