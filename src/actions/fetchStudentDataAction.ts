import {AppDispatch} from '../redux/store/index';
import database from '@react-native-firebase/database';
import {setData} from '../redux/slices/studentDataSlice';

function fetchStudentData(dispatch: AppDispatch, sid: string) {
  database()
    .ref(`/enrollement/${sid}`)
    .once('value', snapshot => {
      const data = snapshot.val();
      const year = Math.ceil(data.semester / 2) as 1 | 2 | 3 | 4 | null;
      dispatch(
        setData({
          uid: data.uid ? data.uid : 0,
          sid: data.studentId,
          feeDue: data.feeDue,
          studentInfo: {
            name: data.firstName + ' ' + data.lastName,
            email: data.email,
            phone: data.phone,
            address: data.address,
            session: data.session,
            studentId: data.studentId,
            year,
            sem: data.semester,
            dob:data.dob,
            gender:data.gender
          },
        }),
      );
    });
}
export default fetchStudentData;
