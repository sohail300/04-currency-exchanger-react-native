/* eslint-disable prettier/prettier */
import {atom} from 'recoil';

export const amountState = atom({
  key: 'Amount',
  default: '0',
});

export const isCalculatedState = atom({
  key: 'IsCalculated',
  default: false,
});

export const resultState = atom({
  key: 'ResultState',
  default: '0',
});
