import { StyleProp, TextStyle, ViewStyle } from "react-native/types";
import { TextInputProps, StyleProp } from 'react-native';

export interface ITextInputProps extends TextInputProps {
    label?: string;
    style?: StyleProp<ViewStyle>;
    containerStyle?: StyleProp<ViewStyle>;
    labelStyle?: StyleProp<TextStyle>;
    control: any;
    rules?: {
      required?: boolean;
      minLength?: number;
      maxLength?: number;
      pattern?: {
        value: RegExp;
        message: string;
      };
      validate?: (val) => string | void;
    };
    name: string;
  }