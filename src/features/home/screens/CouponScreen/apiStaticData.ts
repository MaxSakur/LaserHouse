import {Coupon} from '../../../../types/coupons';

export const data: Coupon[] = [
  {
    path: require('./../../../../../assets/images/coupons/coupon5.png'),
    couponID: 0,
    label: 'На кожну другу процедуру!',
    dueDate: 'до 23.10.2023',
    description:
      'Оплатіть наперед 2 однакові зони лазерної епіляції "Золотий стандарт" та отримайте знижку -50% на другу процедуру.',
    warningText:
      'Відміняти оплату за акцію не можна! Знижка -40% діє за умови оплати наперед від 5-ти процедур однієї зони одним методом.',
  },
  {
    path: require('./../../../../../assets/images/coupons/coupon4.png'),
    couponID: 1,
    label: 'Унікальна знижка на Ендосферу',
    dueDate: 'до 13.05.2024',
    description:
      'Отримайте знижку -25% на будь-яку кількість процедур Ендосфери.',
    warningText:
      'Відміняти оплату за акцію не можна! Знижка -40% діє за умови оплати наперед від 5-ти процедур однієї зони одним методом.',
  },
  {
    path: require('./../../../../../assets/images/coupons/coupon5.png'),
    couponID: 2,
    label: 'Лазерна епіляція "Золотий Стандарт" Бікіні + пахви',
    dueDate: 'до 01.04.2025',
    description:
      'Лазерна епіляція "Золотий Стандарт" для зони бікіні та пахв за спеціальною ціною.',
    warningText: '',
  },
  {
    path: require('./../../../../../assets/images/coupons/coupon4.png'),
    couponID: 3,
    label: 'Комплексна чистка HydraFacial',
    dueDate: 'до 19.02.2023',
    description:
      'Отримайте комплексну чистку HydraFacial за спеціальною ціною.',
    warningText:
      'Відміняти оплату за акцію не можна! Знижка -40% діє за умови оплати наперед від 5-ти процедур однієї зони одним методом.',
  },
  {
    path: require('./../../../../../assets/images/coupons/coupon5.png'),
    couponID: 4,
    label: 'За відгук в Instagram "РЕКОМЕНДУЮ ЛАЗЕРХАУЗ!"',
    dueDate: 'до 31.12.2024',
    description:
      'Отримайте знижку -30% за відгук в Instagram "РЕКОМЕНДУЮ ЛАЗЕРХАУЗ!".',
    warningText:
      'Відміняти оплату за акцію не можна! Знижка -40% діє за умови оплати наперед від 5-ти процедур однієї зони одним методом.',
  },
];

export const getLaserEpilationCoupons = () => data.slice(0, 2);
export const getCosmetologyCoupons = () => data.slice(1, 4);
export const getMyCoupons = () => data.slice(4, 5);
