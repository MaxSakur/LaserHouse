interface RecordData {
  id: number;
  location: string;
  duration: number; // minutes
  addressLink: string;
  name: string;
  doctor: string;
  dateTime: string;
}

export const dates: RecordData[] = [
  {
    id: 1,
    location: 'Ковпака',
    duration: 60,
    addressLink: '(вулиця Ковпака, 17, Київ)',
    name: '3С-Бікіні глибоке (жіноче) - 1шт',
    doctor: 'Чос Любов Володимирівна',
    dateTime: '2024-08-12T10:00:00Z',
  },
  {
    id: 2,
    location: 'Ковпака',
    duration: 60,
    addressLink: '(вулиця Ковпака, 17, Київ)',
    name: '3С-Бікіні глибоке (жіноче) - 1шт',
    doctor: 'Чос Любов Володимирівна',
    dateTime: '2024-08-18T10:00:00Z',
  },
  {
    id: 3,
    location: 'Ковпака',
    duration: 60,
    addressLink: '(вулиця Ковпака, 17, Київ)',
    name: '3С-Бікіні глибоке (жіноче) - 1шт',
    doctor: 'Чос Любов Володимирівна',
    dateTime: '2024-09-20T10:00:00Z',
  },
  {
    id: 4,
    location: 'Ковпака',
    duration: 60,
    addressLink: '(вулиця Ковпака, 17, Київ)',
    name: '3С-Бікіні глибоке (жіноче) - 1шт',
    doctor: 'Чос Любов Володимирівна',
    dateTime: '2024-09-22T10:00:00Z',
  },
];
