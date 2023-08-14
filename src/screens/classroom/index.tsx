import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { ScreenWithBackButtonView } from '../../components';
import tw from '../../lib/tw';
import { StarBg } from '../../svg';
import { IClassData } from '../../constants/types';
import { StackNavigationProp } from '@react-navigation/stack';
import { TStackNavType } from '../../navigation/types';

const Classroom = ({ navigation }: { navigation: StackNavigationProp<TStackNavType> }) => {

  const classes:IClassData = {
    "section_id": "CS101-01",
    "room_number": "Room 101",
    "capacity": 30,
    "schedule": [
      {
        "class_id": "CP101",
        "class_name": "Calculus I",
        "professor": "Dr. John Smith",
        "day": "Monday",
        "start_time": "10:00am",
        "end_time": "11:00am"
      },
      {
        "class_id": "CP201",
        "class_name": "Programming Fundamentals",
        "professor": "Dr. Jane Doe",
        "day": "Wednesday",
        "start_time": "1:00pm",
        "end_time": "2:00pm"
      },
      {
        "class_id": "CP301",
        "class_name": "Data Structures and Algorithms",
        "professor": "Dr. David Lee",
        "day": "Thursday",
        "start_time": "10:00am",
        "end_time": "11:30am"
      },
    ]
  }


  return (
    <ScreenWithBackButtonView label='Classroom'>
      <>
        <StarBg />
        <View style={tw`roundedLayout h-full`}>
          <Text style={tw`text-primary underline font-nunito-bold  text-center text-7 m-5`}>Classrooom</Text>
          <View style={tw`border border-gray-200  -mx-3 shadow-lg shadow-blue-900`} />
          <ScrollView contentContainerStyle={tw`pb-65 px-1 mt-2`}>
            {
              classes.schedule.length ? <View style={tw`flex-1 justify-center items-center`}>
                <Text style={tw`text-black text-6 font-nunito-semibold`}>Scheduled Classes</Text>
              </View> : null
            }
            {
              classes.schedule.length ? classes.schedule.map((classData, index) => (
                <TouchableOpacity key={index} style={tw`flex-row justify-between items-center p-4 shadow-lg bg-white m-2 rounded-xl shadow-blue-900`} onPress={()=>navigation.navigate("Class",{classData})}>
                  <View style={tw`w-1/2`}>
                    <Text style={tw`text-black text-4 font-nunito`} ellipsizeMode="tail" numberOfLines={1}>{classData.class_name}</Text>
                    <Text style={tw`text-gray-500 text-3 font-nunito`}>{classData.professor}</Text>
                  </View>
                  <View style={tw`w-1/2`}>
                    <Text style={tw`text-green-500 text-3 font-nunito text-right`}>{classData.day}</Text>
                    <Text style={tw`text-black text-4 font-nunito text-right`}>{classData.start_time} - {classData.end_time}</Text>
                  </View>
                </TouchableOpacity>
              )) : <View style={tw`flex-1 justify-center items-center h-50`}>
                <Text style={tw`text-black text-6 font-nunito`}>No classes scheduled</Text>
              </View>
            }</ScrollView>
        </View>
      </>
    </ScreenWithBackButtonView>
  );
};

export default Classroom;



