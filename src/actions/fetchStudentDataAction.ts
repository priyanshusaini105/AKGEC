import {AppDispatch} from '../redux/store/index';
import database from '@react-native-firebase/database';
import {getAttendance, setData} from '../redux/slices/studentDataSlice';

function fetchStudentData(dispatch: AppDispatch, sid: number) {
  database()
    .ref(`/college/enrollement/2022/students/1stYear/cse/${2210060}`)
    .once('value', snapshot => {
      const data = snapshot.val();
      console.log(data);
      const year=( Math.ceil(data.semester/2)) as 1|2|3|4|null
      dispatch(
        setData({
          uid: data.uid?data.uid:0,
          sid: data.studentId,
          feeDue: data.feeDue,
          studentInfo: {
            name: data.firstName+' '+data.lastName,
            email: data.email,
            phone: data.phone,
            address: data.address,
            session: data.session,
            studentId: data.studentId,
            year,
            sem: data.semester,
          },
        }),
      );
    });
    database()
    .ref(`/college/classroom/year1/sections/s3/next/stuedentsList/${2210060}/totalAttendance`)
    .once('value', snapshot => {
      const attendance = snapshot.val();
      dispatch(
        getAttendance({attendance})
      )
    })
}
export default fetchStudentData;
