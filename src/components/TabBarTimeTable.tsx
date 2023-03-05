import {View, Text, TouchableOpacity, Animated} from 'react-native';
import React, { useRef } from 'react';
import {RouteProp} from '@react-navigation/native';
import {MaterialTopTabNavigationProp} from '@react-navigation/material-top-tabs';
import { TopTabTimetableParamList } from '../navigation/types';
import tw from '../lib/tw';
import {TabScreenName} from '../constants/types';

export type TabNavigationProp = MaterialTopTabNavigationProp<TopTabTimetableParamList>;
export type TabRouteProp = RouteProp<TopTabTimetableParamList, keyof TopTabTimetableParamList>;

const TabBarTimeTable = ({
  navigation,
  state,
  ...props
}: {
  navigation: any;
  state: any;
}) => {
  const {routes} = state;
  const {descriptors, position} = props as any;

  return (
    <View
      style={tw`flex-row justify-around border border-blue-100 rounded-8 m-2`}>
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

          return (
            <View key={index}>
              <TouchableOpacity
                accessibilityRole="button"
                accessibilityState={isFocused ? {selected: true} : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onLongPress={onLongPress}
                onPress={onPress}
                style={tw`p-2 rounded-8 ${
                    isFocused ? 'bg-primary' : ''
                  } px-5`}
                key={index.toString()}>
                <Text 
                  style={tw`${
                    isFocused ? 'text-white' : 'text-black'
                  } text-3 font-nunito-bold`}>
                  {label.substring(0,3).toUpperCase()}
                </Text>
              </TouchableOpacity>
            </View>
          );
        },
      )}
    </View>
  );
};

export default TabBarTimeTable;

