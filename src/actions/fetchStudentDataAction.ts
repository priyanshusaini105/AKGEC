import {AppDispatch} from '../redux/store/index';
import database from '@react-native-firebase/database';
import {setData} from '../redux/slices/studentDataSlice';

function fetchStudentData(dispatch: AppDispatch, sid: number) {
  database()
    .ref(`/data/users/sid${sid}/`)
    .once('value', snapshot => {
      const data = snapshot.val();
      dispatch(
        setData({
          uid: data.uid,
          sid: data.sid,
          attendance: data.attendance,
          feeDue: data.feeDue,
          studentInfo: {
            name: data.studentInfo.name,
            email: data.studentInfo.email,
            phone: data.studentInfo.phone,
            address: data.studentInfo.address,
            session: data.studentInfo.session,
            studentId: data.studentInfo.studentId,
            year: data.studentInfo.year,
            sem: data.studentInfo.sem,
          },
        }),
      );
    });
}
export default fetchStudentData;
