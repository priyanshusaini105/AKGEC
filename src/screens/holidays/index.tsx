import { View, Text, TouchableOpacity } from 'react-native'
import React, { useMemo, useState } from 'react'
import { ScreenWithBackButtonView } from '../../components'
import { ArrowIcon, StarBg } from '../../svg'
import tw from '../../lib/tw'
import { Calendar, Agenda, AgendaSchedule, AgendaEntry } from 'react-native-calendars'
import { MarkedDates } from 'react-native-calendars/src/types'
import { IHoliday } from '../../constants/types'

const Holidays = () => {

  const holidaysData: {
    start_date: string;
    end_date: string;
    holidays: IHoliday[];
  } = {
    "start_date": "2023-01-01",
    "end_date": "2023-12-31",
    "holidays": [
      {
        "name": "New Year's Day",
        "date": "2023-01-01",
        "description": "New Year's Day is a public holiday in India that marks the beginning of the Gregorian calendar year."
      },
      {
        "name": "Makar Sankranti / Pongal",
        "date": "2023-01-14",
        "description": "Makar Sankranti and Pongal are harvest festivals celebrated in various parts of India with different names and traditions."
      },
      {
        "name": "Republic Day",
        "date": "2023-01-26",
        "description": "Republic Day is a national holiday in India that commemorates the adoption of the Constitution of India on January 26, 1950."
      },
      {
        "name": "Holi",
        "date": "2023-03-08",
        "description": "Holi is a popular Hindu festival that celebrates the arrival of spring and the victory of good over evil."
      },
      {
        "name": "Maha Shivaratri",
        "date": "2023-03-18",
        "description": "Maha Shivaratri is a Hindu festival that honors Lord Shiva and is celebrated with fasting, prayer, and ritual offerings."
      },
      {
        "name": "Ugadi / Gudi Padwa",
        "date": "2023-03-22",
        "description": "Ugadi and Gudi Padwa are Hindu New Year festivals celebrated in different parts of India with traditional rituals and feasting."
      },
      {
        "name": "Ram Navami",
        "date": "2023-03-30",
        "description": "Ram Navami is a Hindu festival that celebrates the birth of Lord Rama and is observed with fasting, prayer, and bhajan sessions."
      },
      {
        "name": "Mahavir Jayanti",
        "date": "2023-04-04",
        "description": "Mahavir Jayanti is a Jain festival that honors the birth anniversary of Lord Mahavir and is celebrated with religious rituals and processions."
      },
      {
        "name": "Good Friday",
        "date": "2023-04-07",
        "description": "Good Friday is a Christian holiday that commemorates the crucifixion and death of Jesus Christ."
      },
      {
        "name": "Eid-ul-Fitar",
        "date": "2023-04-22",
        "description": "Eid-ul-Fitar is a Muslim festival that marks the end of the month-long fasting period of Ramadan and is celebrated with prayers and feasting."
      },
      {
        "name": "Labour Day",
        "date": "2023-05-01",
        "description": "Labour Day is a public holiday in India that celebrates the achievements and contributions of workers and the labor movement."
      },
      {
        "name": "Budhha Purnima",
        "date": "2023-05-05",
        "description": "Budhha Purnima is a Buddhist festival that commemorates the birth, enlightenment, and death of Lord Buddha with prayer, meditation, and offerings."
      },
      {
        name: "Rath Yatra",
        date: "2023-06-20",
        description: "Rath Yatra is an annual Hindu festival associated with Lord Jagannath held in the city of Puri in Odisha, India."
      },
      {
        name: "Bakri Id / Eid ul-Adha",
        date: "2023-06-29",
        description: "Bakri Id or Eid ul-Adha is an Islamic festival celebrated by Muslims worldwide in memory of the willingness of Ibrahim to sacrifice his son as an act of obedience to God's command."
      },
      {
        name: "Muharram",
        date: "2023-07-28",
        description: "Muharram is the first month of the Islamic calendar and marks the anniversary of the Battle of Karbala when Imam Hussain, the grandson of Prophet Muhammad, was martyred."
      },
      {
        name: "Independence Day",
        date: "2023-08-15",
        description: "Independence Day is a national holiday in India celebrated on August 15th to commemorate the country's independence from British rule in 1947."
      },
      {
        name: "Raksha Bandhan",
        date: "2023-08-31",
        description: "Raksha Bandhan is a Hindu festival that celebrates the bond of love and protection between brothers and sisters."
      },
      {
        name: "Janmashtami",
        date: "2023-09-07",
        description: "Janmashtami is a Hindu festival that marks the birth of Lord Krishna, one of the most revered deities in Hinduism."
      },
      {
        name: "Vinayaka Chaturthi",
        date: "2023-09-19",
        description: "Vinayaka Chaturthi is a Hindu festival celebrating the birth of Lord Ganesha, the remover of obstacles and the god of wisdom, prosperity, and good fortune."
      },
      {
        name: "Milad un Nabi",
        date: "2023-09-27",
        description: "Milad un Nabi, also known as Eid-e-Milad, is an Islamic festival that commemorates the birth of Prophet Muhammad, the founder of Islam."
      },
      {
        name: "Onam",
        date: "2023-09-29",
        description: "Onam is a harvest festival celebrated in Kerala, India, to mark the homecoming of the mythical King Mahabali and to welcome the harvest season."
      }, {
        "name": "Mathatma Gandhi Jayanti",
        "date": "2023-10-02",
        "description": "Mahatma Gandhi Jayanti is a national holiday in India celebrated on October 2nd to mark the birth anniversary of Mohandas Karamchand Gandhi, also known as Mahatma Gandhi, who is considered the Father of the Nation in India."
      },
      {
        "name": "Dussehra / Dasara",
        "date": "2023-10-24",
        "description": "Dussehra, also known as Dasara, is a major Hindu festival celebrated at the end of Navratri every year. It commemorates the victory of Lord Rama over the demon king Ravana and the triumph of good over evil."
      },
      {
        "name": "Diwali / Deepavali",
        "date": "2023-11-12",
        "description": "Diwali, also known as Deepavali, is one of the most popular festivals in India and is celebrated by Hindus, Sikhs, and Jains all over the world. It signifies the victory of light over darkness, good over evil, and knowledge over ignorance."
      },
      {
        "name": "Guru Nanak's Birthday",
        "date": "2023-11-27",
        "description": "Guru Nanak's Birthday is a Sikh festival that celebrates the birth of Guru Nanak, the founder of Sikhism. It is one of the most important festivals in the Sikh calendar and is celebrated with great devotion and enthusiasm."
      },
      {
        "name": "Christmas",
        "date": "2023-12-25",
        "description": "Christmas is a global festival celebrated by Christians all over the world to commemorate the birth of Jesus Christ. It is a time for family gatherings, feasting, and exchanging gifts."
      }
    ]
  }


  const { markedDates, holidayItems } = useMemo(() => {
    return holidaysData.holidays.reduce<{ markedDates: MarkedDates, holidayItems: AgendaSchedule }>(
      (acc, curr) => {
        // Add the marked date
        acc.markedDates[curr.date] = { marked: true, dotColor: 'green' };

        // Add the holiday item
        if (!acc.holidayItems[curr.date]) {
          acc.holidayItems[curr.date] = [];
        }
        acc.holidayItems[curr.date].push({ name: curr.name, height: 10, day: curr.description });

        return acc;
      },
      { markedDates: {}, holidayItems: {} }
    );
  }, [holidaysData.holidays]);


  return (
    <ScreenWithBackButtonView label='Holidays'>
      <>
        <StarBg />
        <View style={tw`roundedLayout px-5 h-full`}>
          <Text style={tw`text-primary underline font-nunito-bold  text-center text-7 m-5`}>Holidays</Text>
          <View style={tw`border border-gray-200  -mx-3 shadow-lg shadow-blue-900`} />
          <Agenda
            items={holidayItems}
            renderItem={(item, isFirst) => {
              return (
                <View>
                  {isFirst && <View style={tw`border border-slate-600  -mx-4 shadow-lg shadow-blue-900`} />}
                  <Text style={tw`text-black text-4 font-nunito-bold`}>{item.name}</Text>
                  <View style={tw`border border-gray-200  shadow-md`} />
                  {/* <Text style={tw`text-gray-400 text-4 font-nunito-regular`}>{item.day}</Text> */}
                </View>
              )
            }}
            theme={{
              textDayFontFamily: 'Nunito-Regular',
              textMonthFontFamily: 'Nunito-Bold',
              textDayHeaderFontFamily: 'Nunito-SemiBold',
              todayTextColor: tw.color('white'),
              selectedDayBackgroundColor: tw.color('primary'),
              todayBackgroundColor: tw.color('secondary-solid')
            }}
            minDate={holidaysData.start_date}
            maxDate={holidaysData.end_date}
            markedDates={markedDates}
            renderDay={(date: Date, item) => (
              <View style={tw`w-15`}>
                <Text style={tw`text-primary text-6 mt-2 text-center font-nunito-semibold`}>{date.getDate()}</Text>
                <Text style={tw`text-gray-400 text-4 text-center`}>{new Intl.DateTimeFormat("en-US", { weekday: "short" }).format(date)}</Text>
              </View>
            )
            }
            renderEmptyData={() => (<Text style={tw`text-red-700 text-center mt-8 font-nunito-bold text-4xl`}>!No holidays</Text>)}
          />
        </View>
      </>
    </ScreenWithBackButtonView>
  )
}

export default Holidays