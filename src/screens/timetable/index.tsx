import { View, Text } from 'react-native'
import React from 'react'
import { ScreenWithBackButtonView } from '../../components'
import StarBg from './../../svg/StarBg';
import tw from '../../lib/tw';
import { ITimeTableData } from '../../constants/types';
import TimeTableTopTabs from '../../navigation/TimeTableTopTabs';


const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const subjects = ["Mathematics", "Physics", "Chemistry", "English", "Workshop", "Lab"];
const labs = ["Lab 1", "Lab 2", "Lab 3"];

const timetable: ITimeTableData[] = [
  {
    day: 'Monday',
    list: [
      {
        periodNo: 1,
        time: '8:30am - 9:20am',
        subject: 'Mathematics',
        teacher: 'John Doe'
      },
      {
        periodNo: 2,
        time: '9:30am - 10:20am',
        subject: 'Physics',
        teacher: 'Jane Doe'
      },
      {
        periodNo: 3,
        time: '10:30am - 11:20am',
        subject: 'Chemistry',
        teacher: 'Bob Smith'
      },
      {
        periodNo: 4,
        time: '11:30am - 12:20pm',
        subject: 'English',
        teacher: 'Alice Johnson'
      },
      {
        periodNo: 5,
        time: '1:30pm - 2:20pm',
        subject: 'Computer Science',
        teacher: 'David Lee'
      },
      {
        periodNo: 6,
        time: '2:30pm - 3:20pm',
        subject: 'History',
        teacher: 'Maggie Brown'
      },
      {
        periodNo: 7,
        time: '3:30pm - 4:20pm',
        subject: 'Geography',
        teacher: 'Peter Davis'
      }
    ]
  },
  {
    day: 'Tuesday',
    list: [
      {
        periodNo: 1,
        time: '8:30am - 9:20am',
        subject: 'History',
        teacher: 'Maggie Brown'
      },
      {
        periodNo: 2,
        time: '9:30am - 10:20am',
        subject: 'Computer Science',
        teacher: 'David Lee'
      },
      {
        periodNo: 3,
        time: '10:30am - 11:20am',
        subject: 'Mathematics',
        teacher: 'John Doe'
      },
      {
        periodNo: 4,
        time: '11:30am - 12:20pm',
        subject: 'Physics',
        teacher: 'Jane Doe'
      },
      {
        periodNo: 5,
        time: '1:30pm - 2:20pm',
        subject: 'English',
        teacher: 'Alice Johnson'
      },
      {
        periodNo: 6,
        time: '2:30pm - 3:20pm',
        subject: 'Chemistry',
        teacher: 'Bob Smith'
      },
      {
        periodNo: 7,
        time: '3:30pm - 4:20pm',
        subject: 'Geography',
        teacher: 'Peter Davis'
      }
    ]
  },
  {
    day: 'Wednesday',
    list: [
      {
        periodNo: 1,
        time: '8:30am - 9:20am',
        subject: 'English',
        teacher: 'Alice Johnson'
      },
      {
        periodNo: 2,
        time: '9:30am - 10:20am',
        subject: 'Chemistry',
        teacher: 'Bob Smith'
      },
      {
        periodNo: 3,
        time: '10:30am - 11:20am',
        subject: 'Computer Science',
        teacher: 'David Lee'
      },
      {
        periodNo: 4,
        time: '10:30am - 11:20am',
        subject: 'Computer Science',
        teacher: 'David Lee'
      },
      {
        periodNo: 5,
        time: '11:30am - 12:20pm',
        subject: 'Geography',
        teacher: 'Peter Davis'
      },
      {
        periodNo: 6,
        time: '1:30pm - 2:20pm',
        subject: 'Mathematics',
        teacher: 'John Doe'
      },
      {
        periodNo: 7,
        time: '2:30pm - 3:20pm',
        subject: 'Physics',
        teacher: 'Jane Doe'
      },
      {
        periodNo: 8,
        time: '3:30pm - 4:20pm',
        subject: 'History',
        teacher: 'Maggie Brown'
      }
    ]
  },
  {
    day: 'Thursday',
    list: [
      {
        periodNo: 1,
        time: '8:30am - 9:20am',
        subject: 'Physics',
        teacher: 'Jane Doe'
      },
      {
        periodNo: 2,
        time: '9:30am - 10:20am',
        subject: 'History',
        teacher: 'Maggie Brown'
      },
      {
        periodNo: 3,
        time: '10:30am - 11:20am',
        subject: 'English',
        teacher: 'Alice Johnson'
      },
      {
        periodNo: 4,
        time: '11:30am - 12:20pm',
        subject: 'Mathematics',
        teacher: 'John Doe'
      },
      {
        periodNo: 5,
        time: '1:30pm - 2:20pm',
        subject: 'Chemistry',
        teacher: 'Bob Smith'
      },
      {
        periodNo: 6,
        time: '2:30pm - 3:20pm',
        subject: 'Geography',
        teacher: 'Peter Davis'
      },
      {
        periodNo: 7,
        time: '3:30pm - 4:20pm',
        subject: 'Computer Science',
        teacher: 'David Lee'
      }
    ]
  },
  {
    day: 'Friday',
    list: [
      {
        periodNo: 1,
        time: '8:30am - 9:20am',
        subject: 'English',
        teacher: 'Alice Johnson'
      },
      {
        periodNo: 2,
        time: '9:30am - 10:20am',
        subject: 'Geography',
        teacher: 'Peter Davis'
      },
      {
        periodNo: 3,
        time: '10:30am - 11:20am',
        subject: 'Computer Science',
        teacher: 'David Lee'
      },
      {
        periodNo: 4,
        time: '11:30am - 12:20pm',
        subject: 'History',
        teacher: 'Maggie Brown'
      },
      {
        periodNo: 5,
        time: '1:30pm - 2:20pm',
        subject: 'Mathematics',
        teacher: 'John Doe'
      },
      {
        periodNo: 6,
        time: '2:30pm - 3:20pm',
        subject: 'Physics',
        teacher: 'Jane Doe'
      },
      {
        periodNo: 7,
        time: '3:30pm - 4:20pm',
        subject: 'Chemistry',
        teacher: 'Bob Smith'
      }
    ]
  },
 
  {
    day: 'Saturday',
    list: [
      {
        periodNo: 1,
        time: '8:30am - 9:20am',
        subject: 'Computer Science',
        teacher: 'David Lee'
      },
      {
        periodNo: 2,
        time: '9:30am - 10:20am',
        subject: 'Geography',
        teacher: 'Peter Davis'
      },
      {
        periodNo: 3,
        time: '10:30am - 11:20am',
        subject: 'Mathematics',
        teacher: 'John Doe'
      },
      {
        periodNo: 4,
        time: '11:30am - 12:20pm',
        subject: 'Physics',
        teacher: 'Jane Doe'
      },
      {
        periodNo: 5,
        time: '1:30pm - 2:20pm',
        subject: 'Chemistry',
        teacher: 'Bob Smith'
      }
    ]
  }
];




const Timetable = () => {
  return (
    <ScreenWithBackButtonView label='Time Table'>
      <>
        <StarBg />
        <View style={tw`roundedLayout h-full p-1`}>
          <TimeTableTopTabs timetable={timetable} />
        </View>
      </>
    </ScreenWithBackButtonView>
  )
}

export default Timetable