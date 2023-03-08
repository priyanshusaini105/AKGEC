import { Button, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { AttendanceTable } from '../../components';
import { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';
import tw from '../../lib/tw';


const Table = () => {

  const { attendance: attendanceData } = useSelector(
    (state: RootState) => state.attendanceData,
  );
  const subjectList: Array<string> = [
    'BAS-104',
    'BAS-05',
    'BAS-5',
    'BAS-1',
    'BAS-50',
  ];


  const rowsPerPage = 10;
  const totalPages = Math.ceil(Object.keys(attendanceData).length / rowsPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPageState, setRowsPerPageState] = useState(10);
  const [page, setPage] = useState(0);
  // const [rowsPerPage, setRowsPerPage] = useState(10);
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event: unknown, newRowsPerPage: number) => {
    // setRowsPerPage(newRowsPerPage);
  };

  const isFirst = currentPage === 1;
  const isLast = currentPage === totalPages;

  return (
    <View style={tw`bg-white flex-1`}>
      <AttendanceTable
        attendanceData={attendanceData}
        subjectList={subjectList}
        currentPage={currentPage}
        rowsPerPage={rowsPerPage}
      />
      <View style={tw`absolute top-110 mx-5`}>
        <View style={tw`flex-row justify-center items-center gap-5`}>
        <View style={tw`flex-row`}>
  <TouchableOpacity
    style={tw`bg-${isFirst ? 'stone-400' : 'primary'} rounded-l-2 px-2 items-center justify-center w-10`}
    onPress={() => setCurrentPage(currentPage - 1)}
    disabled={isFirst}
  >
    <Text style={tw`text-white text-7`}>{'|<'}</Text>
  </TouchableOpacity>
  <TouchableOpacity
    style={tw`bg-${isLast ? 'stone-400' : 'primary'} rounded-r-2 px-2 items-center justify-center w-10`}
    onPress={() => setCurrentPage(currentPage + 1)}
    disabled={isLast}
    width={50} // set a fixed width
  >
    <Text style={tw`text-white text-7`}>{'>|'}</Text>
  </TouchableOpacity>
</View>

          <View style={tw``}>
            <Text style={tw`text-center text-black font-nunito`}>
              Page {currentPage} of {totalPages}
            </Text>
          </View>
          <View style={tw``}>
            <Text style={tw`text-center text-black font-nunito`}>
              Rows per page: {rowsPerPageState}
            </Text>
          </View>
        </View>
      </View>
    </View >
  );
};

export default Table;

