
import { useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity } from 'react-native';
import { IDashboardItem } from '../constants/types';
import { StackNavigationProp } from '@react-navigation/stack';
import { TStackNavType } from '../navigation/types';
import auth from '@react-native-firebase/auth';
import tw from '../lib/tw';
import React from 'react';


const DashboardItemTiles = ({item}: {item: IDashboardItem}) => {
    const navigation = useNavigation<StackNavigationProp<TStackNavType>>();
    
  
    return (
      <TouchableOpacity
        style={{
          ...tw`bg-quinary shadow-primary m-2 rounded-3 py-6 items-center justify-center shadow-md w-37`,
        }}
        onPress={() => {
          if (item.target == 'logout')
            auth()
              .signOut()
              .then(() => navigation.replace('SignIn'));
          else navigation.navigate("ChangePassword");
        }}>
        {item.icon}
        <Text style={{...tw`text-5 text-black text-center font-nunito`}}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  export default DashboardItemTiles;
  