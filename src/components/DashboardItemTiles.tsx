
import { useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import { Theme } from '../constants';
import { IDashboardItem } from '../constants/types';
import { StackNavigationProp } from '@react-navigation/stack';
import { IStackNavType } from '../navigation/types';
import auth from '@react-native-firebase/auth';

const {colors}=Theme; 

const DashboardItemTiles = ({item}: {item: IDashboardItem}) => {
    const navigation = useNavigation<StackNavigationProp<IStackNavType>>();
    
  
    return (
      <TouchableOpacity
        style={{
          ...tw`bg-[${colors.tertiary}] shadow-[${colors.primary}] m-2 rounded-3 py-6 items-center justify-center shadow-md w-37`,
        }}
        onPress={() => {
          if (item.target == 'logout')
            auth()
              .signOut()
              .then(() => navigation.replace('SignIn'));
          else navigation.navigate(item.target);
        }}>
        {item.icon}
        <Text style={{...tw`text-5 text-black text-center`}}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  export default DashboardItemTiles;
  