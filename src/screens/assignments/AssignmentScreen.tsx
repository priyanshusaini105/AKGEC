import { View, Text, ScrollView, TouchableOpacity, Button } from 'react-native'
import React from 'react'
import { ScreenWithBackButtonView } from '../../components'
import tw from '../../lib/tw'
import { StarBg } from '../../svg'
import { ISubjectAssignments, ISubjectList } from '../../constants/types'
import { StackNavigationProp } from '@react-navigation/stack'
import { TStackNavType } from '../../navigation/types'
import { RouteProp } from '@react-navigation/native';

interface Props {
  route: RouteProp<TStackNavType, 'AssignmentScreen'>;
  navigation: StackNavigationProp<TStackNavType>;
}






const assignmentData: ISubjectAssignments = {
  "name": "Engineering Mathematics-1",
  "code": "BAS-101",
  "assignments": [
    {
      id: 1,
      name: "Assignment 1 lorem bnbvcfgvhbnbvfgfvhbjn",
      dueDate: new Date("2023-03-11T00:00:00.000Z").toDateString(),
      isSubmitted: false,
      description: "Write a program to calculate the area of a circle",
      points: {
        total: 10,
        obtained: 0,
      },
      instructions: "Submit the program code in a text file"
    },
    {
      id: 2,
      name: "Assignment 2",
      dueDate: new Date("2023-03-12T00:00:00.000Z").toDateString(),
      isSubmitted: true,
      description: "Write a program to calculate the perimeter of a rectangle",
      points: {
        total: 15,
        obtained: 15,
      },
      instructions: "Submit the program code in a text file"
    },
    {
      id: 3,
      name: "Assignment 3",
      dueDate: new Date("2023-03-14T00:00:00.000Z").toDateString(),
      isSubmitted: false,
      description: "Write a program to find the maximum element in an array",
      points: {
        total: 20,
        obtained: 0,
      },
      instructions: "Submit the program code in a text file"
    },
    {
      id: 4,
      name: "Assignment 4",
      dueDate: new Date("2023-03-17T00:00:00.000Z").toDateString(),
      isSubmitted: false,
      description: "Write a program to implement a linked list",
      points: {
        total: 25,
        obtained: 0,
      },
      instructions: "Submit the program code in a text file"
    },
    {
      id: 5,
      name: "Assignment 5",
      dueDate: new Date("2023-03-20T00:00:00.000Z").toDateString(),
      isSubmitted: true,
      description: "Write a program to implement a binary search tree",
      points:{
        total: 30,
        obtained: 30,
      },
      instructions: "Submit the program code in a text file"
    }
  ]
}

const AssignmentScreen = ({ route,navigation }: Props) => {
  const { subject } = route.params
  return (
    <ScreenWithBackButtonView label={subject.name}>
      <>
        <StarBg />
        <ScrollView style={tw`roundedLayout h-full pt-2`}>
          {assignmentData.assignments.map(assignment => (
            <View style={tw`border border-gray-200 m-3 rounded-xl flex-row p-2 px-4 justify-between items-center`} key={assignment.id}>
              <View>
                <Text style={tw`text-lg font-nunito-bold text-gray-800`} ellipsizeMode="tail" numberOfLines={1}>{assignment.name}</Text>
                <Text style={tw`text-sm text-${assignment.isSubmitted ? 'green' : 'red'}-500 bg-${assignment.isSubmitted ? 'green' : 'red'}-50 self-start rounded-md px-3 my-2 font-nunito`}>{assignment.isSubmitted ? 'Submitted' : 'Not Submitted'}</Text>
              </View>
              <View>
                <Text style={tw`text-sm text-gray-700 font-nunito`}>{assignment.dueDate}</Text>
                <TouchableOpacity style={tw`m-auto`} onPress={()=>navigation.navigate("AssignmentDetail",{assignment})}>
                  <Text style={tw`text-4 text-blue-500 bg-blue-50 self-start rounded-md px-3 my-2 font-nunito`}>View</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        <View style={tw`h-35`}/>
        </ScrollView>
      </>
    </ScreenWithBackButtonView>
  )
}

export default AssignmentScreen