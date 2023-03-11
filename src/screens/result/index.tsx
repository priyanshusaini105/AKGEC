import { View, Text } from 'react-native'
import React from 'react'
import { ScreenWithBackButtonView } from '../../components';
import ResultBgSvg from '../../svg/ResultBg';
import tw from '../../lib/tw';
import { BottomSvg, PDFIcon } from '../../svg';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Result = () => {
  const studentResult = {
    "student_name": "Priyanshu Saini",
    "roll_number": "BT1001",
    "year": "1st",
    "branch": "Computer Science",
    "subjects": [
      {
        "subject_name": "Mathematics",
        "marks_obtained": 80,
        "total_marks": 100,
      },
      {
        "subject_name": "Physics",
        "marks_obtained": 70,
        "total_marks": 100,
      },
      {
        "subject_name": "Chemistry",
        "marks_obtained": 75,
        "total_marks": 100,
      },
      {
        "subject_name": "Programming",
        "marks_obtained": 87,
        "total_marks": 100,
      },
      {
        "subject_name": "English",
        "marks_obtained": 65,
        "total_marks": 100,
      }
    ]
  }

  const totalMarks = studentResult.subjects.reduce((acc, subject) => acc + subject.total_marks, 0);
  const marksObtained = studentResult.subjects.reduce((acc, subject) => acc + subject.marks_obtained, 0);
  const totalPercentage = (marksObtained / totalMarks) * 100;

  const advice = totalPercentage >= 75 ? 'You are Excellent' : 'You need to Improvement';

  return (
    <ScreenWithBackButtonView label='Result' labelStyle={tw`absolute`}>
      <>
        <ResultBgSvg />
        <View style={tw`bg-sky-200 h-30 w-30 rounded-full self-center absolute top-10 border-[2] border-gray-300 items-center justify-center p-1 shadow-lg`}>
          <Text style={tw`font-nunito-bold text-6 text-black`}>{totalPercentage.toFixed(2)}%</Text>
        </View>
        <View style={tw`roundedLayout h-full -top-7`}>
          <Text style={tw`text-primary underline font-nunito-bold  text-center text-7 m-5`}>Result</Text>
          <View style={tw`border border-gray-200  -mx-3 shadow-lg shadow-blue-900`} />
          <View style={tw`items-center`}>
            <View style={tw` m-3 justify-center`}>
              <Text style={tw`text-gray-700 font-nunito-semibold text-center`}>{advice}</Text>
              <Text style={tw`text-black text-left text-xl font-nunito-bold text-center`}>{studentResult.student_name}</Text>
            </View>
            <View style={tw`m-1 p-1 border border-primary rounded-2xl  justify-center`}>
              <View style={tw`flex-row justify-between gap-2`}>
                <Text style={tw`text-black text-3 font-nunito-bold text-center w-6/20`}>Subject Name</Text>
                <Text style={tw`text-black text-3 text-left  font-nunito-bold text-center w-4/20 bg-sky-200`}>Obtained Marks</Text>
                <Text style={tw`text-black text-3 text-left font-nunito-bold text-center w-4/20 bg-sky-100`}>Total Marks</Text>
                <Text style={tw`text-black text-3 text-left font-nunito-bold text-center w-4/20 bg-sky-200`}>Percentage</Text>
              </View>
              <View
                style={tw`border border-gray-500  shadow-lg`}
              />
              <View style={tw`m-1 p-1 justify-center`}>
                {studentResult.subjects.map((subject, index) => (
                  <View key={index} style={tw`flex-row justify-between gap-2`}>
                    <Text style={tw`p-1 text-black text-3 font-nunito-bold text-center w-6/20`}>{subject.subject_name}</Text>
                    <Text style={tw`p-1 text-black text-3 text-left  font-nunito-bold text-center w-4/20 bg-sky-200`}>{subject.marks_obtained}</Text>
                    <Text style={tw`p-1 text-black text-3 text-left font-nunito-bold text-center w-4/20 bg-sky-100`}>{subject.total_marks}</Text>
                    <Text style={tw`p-1 text-black text-3 text-left font-nunito-bold text-center w-4/20 bg-sky-200`}>{+(subject.marks_obtained / subject.total_marks).toFixed(4) * 100}%</Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
          <TouchableOpacity style={tw`bg-primary self-center rounded-xl p-2 px-4 m-1 flex-row gap-2`}>
            <Text style={tw`font-nunito-semibold text-4`}>Download PDF</Text>
            <PDFIcon
              width={25}
              height={25}
            />
          </TouchableOpacity>
          <BottomSvg />
        </View>
      </>
    </ScreenWithBackButtonView>
  )
}

export default Result