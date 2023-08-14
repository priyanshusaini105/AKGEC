import {View, Text} from 'react-native';
import React from 'react';
import {ScreenWithBackButtonView} from '../../components';
import {RouteProp} from '@react-navigation/native';
import { TStackNavType} from '../../navigation/types';
import tw from '../../lib/tw';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

type Props = {
  route: RouteProp<TStackNavType, 'Class'>;
};

interface IClassroomTopTabs {
  Lecture: undefined;
  Attachments: undefined;
}

const Tab = createMaterialTopTabNavigator<IClassroomTopTabs>();

const Class = ({route}: Props) => {
  const {classData} = route.params;
  return (
    <ScreenWithBackButtonView label={classData?.class_name}>
      <View style={tw`roundedLayout h-full`} />
    </ScreenWithBackButtonView>
  );
};

export default Class;
