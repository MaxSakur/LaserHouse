export interface IAddress {
  city: string;
  street: string;
  hours: string;
}

export enum Socials {
  Viber = 'viber',
  Telegram = 'telegram',
  Instagram = 'instagram',
  Youtube = 'youtube',
  Facebook = 'facebook',
}

// GET => api.addresses
// POST => api.record({address: IAddress, social: Socials})

export const addresses: IAddress[] = [
  {
    city: 'Київ',
    street: 'вул. Ковпака, 17',
    hours: 'Пн-Нд: з 9:00 - 21:00',
  },
  {
    city: 'Київ',
    street: 'вул. Володимирська, 49а',
    hours: 'Пн-Нд: з 9:00 - 21:00',
  },
  {
    city: 'Київ',
    street: 'вул. Микільсько-Слобідська, 2г',
    hours: 'Пн-Нд: з 9:00 - 21:00',
  },
  {
    city: 'Київ',
    street: 'вул. Трускавецька, 10в',
    hours: 'Пн-Нд: з 9:00 - 21:00',
  },
  {
    city: 'Київ',
    street: 'пр-т Червоної Калини, 8',
    hours: 'Пн-Нд: з 9:00 - 21:00',
  },
  {
    city: 'Київ',
    street: 'вул. Леонтовича, 6а',
    hours: 'Пн-Нд: з 9:00 - 21:00',
  },
  {
    city: 'Київ',
    street: 'пр-т Голосіївський, 68',
    hours: 'Пн-Нд: з 9:00 - 21:00',
  },
  {
    city: 'Харків',
    street: 'вул. Культури, 12',
    hours: 'Пн-Нд: з 9:00 - 21:00',
  },
];
