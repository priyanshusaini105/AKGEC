import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { AttendanceTable } from '../../components';
import { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';
import tw from '../../lib/tw';


const Table = () => {

    const {attendance: attendanceData} = useSelector(
        (state: RootState) => state.attendanceData,
      );
      const subjectList: Array<string> = [
        'BAS-104',
        'BAS-05',
        'BAS-5',
        'BAS-1',
        'BAS-50',
      ];

    return (
    <View style={tw`bg-white flex-1`}>
      <AttendanceTable
        attendanceData={attendanceData}
        subjectList={subjectList}
      />
    </View>
  );
};

export default Table;

const styles = StyleSheet.create({});
