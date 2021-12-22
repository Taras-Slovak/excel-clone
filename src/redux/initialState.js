import {storage} from '@core/utils';
import {defaultStyles} from '@/scss/constants';

const defaultState = {
  rowState: {},
  colState: {},
  dataState: {},
  currentText: '',
  currentStyles: defaultStyles
};

export const initialState = storage('excel-state')
  ? storage('excel-state')
  : defaultState;
