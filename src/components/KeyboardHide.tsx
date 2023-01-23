import {View, Text} from 'react-native';
import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Keyboard, TouchableWithoutFeedback} from 'react-native';

const KeyboardHide = ({children}: {children:JSX.Element}) => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAwareScrollView>{children}</KeyboardAwareScrollView>
    </TouchableWithoutFeedback>
  );
};

export default KeyboardHide;
