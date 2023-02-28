import {View, Text, TouchableOpacity, Animated} from 'react-native';
import React, { useRef } from 'react';
import {RouteProp, TabNavigationState} from '@react-navigation/native';
import {MaterialTopTabNavigationProp} from '@react-navigation/material-top-tabs';
import { TopTabParamList } from '../navigation/types';
import tw from '../lib/tw';
import {TabScreenName} from '../constants/types';

export type TabNavigationProp = MaterialTopTabNavigationProp<TopTabParamList>;
export type TabRouteProp = RouteProp<TopTabParamList, keyof TopTabParamList>;

const TabBarAttendance = ({
  navigation,
  state,
  ...props
}: {
  navigation: any;
  state: any;
}) => {
  const {routes} = state;
  const {descriptors, position} = props as any;
  const translateX = useRef(new Animated.Value(0)).current;
//   const handleTabPress = (index) => {
//     setActiveIndex(index);
//     Animated.timing(translateX, {
//       toValue: index * tabWidth,
//       duration: 250,
//       useNativeDriver: false,
//     }).start();
//   };
  return (
    <View
      style={tw`flex-row justify-around bg-secondary-light rounded-8 m-2 p-2`}>
      {routes.map(
        (route: {key: string; name: TabScreenName}, index: number) => {
          const {options} = descriptors[route.key];
          const label: string =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              // The `merge: true` option makes sure that the params inside the tab screen are preserved
              navigation.navigate({name: route.name, merge: true});
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          const inputRange = state.routes.map((_: any, i: number) => i);
          //   log(inputRange)
          const opacity = position.interpolate({
            inputRange,
            outputRange: inputRange.map((i:number) => (i === index ? 1 : 0)),
          });

          return (
            <View key={index}>
            {/* <Animated.View
                style={[tw`${
                    isFocused ? 'bg-secondary-solid' : ''
                  } absolute w-5 h-5`,{
                    transform:[{translateX}]
                  }]}
            /> */}
              <TouchableOpacity
                accessibilityRole="button"
                accessibilityState={isFocused ? {selected: true} : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onLongPress={onLongPress}
                onPress={onPress}
                style={tw` p-2 rounded-8 ${
                    isFocused ? 'bg-secondary-solid' : ''
                  } px-4`}
                key={index.toString()}>
                <Text
                  style={tw`${
                    isFocused ? 'text-white' : 'text-black'
                  } text-4 font-nunito-bold`}>
                  {label}
                </Text>
              </TouchableOpacity>
            </View>
          );
        },
      )}
    </View>
  );
};

export default TabBarAttendance;
// function doRate(number) {
//   const selectElements = document.getElementsByTagName('select');
//   for (let i = 0; i < selectElements.length; i++) {
//     selectElements[i].value = '3';
//   }
// }
