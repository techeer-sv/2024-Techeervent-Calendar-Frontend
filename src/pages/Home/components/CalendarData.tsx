import Icon from '@/components/icon/Icon';

const CalendarData = [
  {
    date: 25,
    x: '42%',
    y: '7.5%',
    isOpen: false,
    giftImage: <Icon id="25th-box" width={44} height={44} />,
  },
  {
    date: 26,
    x: '73.5%',
    y: '6.3%',
    isOpen: false,
    giftImage: <Icon id="26th-box" width={44} height={44} />,
  },
  {
    date: 27,
    x: '9%',
    y: '30.5%',
    isOpen: false,
    giftImage: <Icon id="27th-box" width={44} height={44} />,
  },
  {
    date: 28,
    x: '42%',
    y: '31%',
    isOpen: false,
    giftImage: <Icon id="28th-box" width={44} height={44} />,
  },
  {
    date: 29,
    x: '9%',
    y: '53%',
    isOpen: false,
    giftImage: <Icon id="29th-box" width={44} height={44} />,
  },
  {
    date: 30,
    x: '42%',
    y: '50%',
    isOpen: false,
    giftImage: <Icon id="30th-box" width={44} height={44} />,
  },
  {
    date: 31,
    x: '73.5%',
    y: '53%',
    isOpen: false,
    giftImage: <Icon id="31th-box" width={44} height={44} />,
  },
];

export default CalendarData;

export const USER_CALENDAR = [
  {
    calendarId: 1,
    calendarDate: 25,
    qa: {
      question: 'What is your favorite color?',
      answer: 'Blue',
    },
    drawName: 'Gift A',
  },
  {
    calendarId: 2,
    calendarDate: 26,
    qa: {
      question: 'What is your favorite food?',
      answer: 'Pizza',
    },
    drawName: null, // 낙첨
  },
  {
    calendarId: 3,
    calendarDate: 28,
    qa: {
      question: 'Where do you want to travel?',
      answer: 'Japan',
    },
    drawName: null, // 낙첨
  },
];
