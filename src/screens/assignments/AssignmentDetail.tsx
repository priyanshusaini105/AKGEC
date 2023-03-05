import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { IAssignmentDetails, IDocumentDetail } from '../../constants/types';
import ScreenWithBackButtonView from '../../components/ScreenWithBackButtonView';
import DocumentPicker, { DocumentPickerResponse } from 'react-native-document-picker';
import { StarBg } from './../../svg';
import tw from '../../lib/tw'

interface Props {
  route: {
    params: {
      assignment: IAssignmentDetails;
    };
  };
}


const AssignmentDetail = ({ route }: Props) => {
  const [documentDetail, setDocumentDetail] = useState<IDocumentDetail>({
    uri: '',
    type: '',
    name: '',
    size: 0,
    uploaded: false
  })
  const handleFileUpload = async (): Promise<void> => {
    try {
      const result: DocumentPickerResponse[] = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf],
      });
      console.log(
        // result.uri,
        // result.type, // mime type
        // result.name,
        // result.size
        result,
      );
      const [{ uri, type, name, size }] = result;
      setDocumentDetail({
        uri, type, name, size,
        uploaded: true
      });
      // Upload the file to the server
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker
      } else {
        // Error
      }
    }
  };



  const { assignment } = route.params;

  const isAssignmentOverdue = new Date(assignment.dueDate) < new Date();
  const isAssignmentSubmitted = assignment.isSubmitted;

  const renderSubmitButton = () => {
    if (!isAssignmentOverdue && !isAssignmentSubmitted) {
      return (
        <>
          <TouchableOpacity style={tw`border border-gray-400 px-4 py-2 rounded-3xl`} onPress={() => handleFileUpload()}>
            <Text style={tw`text-gray-700 font-nunito-bold text-4`} ellipsizeMode="middle" numberOfLines={1}> {documentDetail.uploaded ? documentDetail.name : '+ Add Assignment'}</Text>
          </TouchableOpacity>
          {documentDetail.uploaded ? <TouchableOpacity style={tw`bg-secondary-solid px-4 py-2 rounded-md mt-4`} onPress={() => console.log('Submit')}>
            <Text style={tw`text-white font-nunito-bold text-lg`}>Upload</Text>
          </TouchableOpacity> : null}
        </>
      );
    } else if (isAssignmentSubmitted) {
      return (
        <Text style={tw`text-green-600 font-bold text-lg font-nunito`}>Assignment Submitted</Text>
      );
    } else {
      return (
        <Text style={tw`text-red-600 font-bold text-lg font-nunito`}>Assignment Overdue</Text>
      );
    }
  };

  return (
    <ScreenWithBackButtonView label={assignment.name}>
      <>
        <StarBg />
        <View style={tw`relative z-10 roundedLayout p-6 h-full `}>
          <View style={tw`border-b-2 border-gray-200`}>
            <Text style={tw`text-black text-2xl font-nunito-bold my-2`}>{assignment.name}</Text>
            <Text style={tw`text-gray-700 my-2 text-4 font-nunito-semibold`}>{assignment.description}</Text>
            <Text style={tw`text-gray-600 mb-2 font-nunito`}>Due Date: {assignment.dueDate}</Text>
            <Text style={tw`text-gray-600 mb-2 text-[3.7] font-nunito`}>Obtained Points: {assignment.points.obtained}</Text>
            <Text style={tw`text-gray-600 mb-2 text-[3.7] font-nunito`}>Total Points: {assignment.points.total}</Text>
            <Text style={tw`text-gray-600 mb-2 font-nunito`}>Instructions: {'\n'} {assignment.instructions}</Text>
          </View>
          <View style={tw`justify-center items-center mt-5`}>
            {renderSubmitButton()}
          </View>
        </View>
      </>
    </ScreenWithBackButtonView>
  );
};

export default AssignmentDetail;
