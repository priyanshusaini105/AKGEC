import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {ScreenWithBackButtonView} from '../../components';
import tw from 'twrnc';
import {ResuasbleStyles, Theme} from '../../constants';
import { Calendar } from 'react-native-calendars';
import { StarBg } from '../../svg';

type Props = {};
const {roundedLayout} = ResuasbleStyles;
const {colors} = Theme;

const Attendace = (props: Props) => {
  return (
    <ScreenWithBackButtonView>
      <View>
          <TouchableOpacity
            style={tw`self-center bg-[${colors.tertiary}] rounded-2xl my-7 p-1`}>
            <Text style={tw`text-[${colors.primary}]`}>Calender</Text>
          </TouchableOpacity>
          <StarBg/>
        <View style={[roundedLayout, tw`h-198`]}>
          <Text>Attendance</Text>
          <Calendar/>
        </View>
      </View>
    </ScreenWithBackButtonView>
  );
};

export default Attendace;
