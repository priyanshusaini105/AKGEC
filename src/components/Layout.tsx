import LinearGradient from 'react-native-linear-gradient';
import {Theme} from '../constants';
import tw from 'twrnc';
import React from 'react';
type Props = {
  children: React.ReactNode;
};
const {colors} = Theme;

const Layout = ({children}: Props) => {
  return (
    <LinearGradient
      colors={[colors.primary, colors.secondary]}
      style={{...tw`h-full w-full`}}>
      {children}
    </LinearGradient>
  );
};

export default Layout;
