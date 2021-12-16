import {CHANGE_TEXT, TABLE_RESIZE} from '@/redux/type';

// Action creator
export function tableResize(data) {
  return {
    type: TABLE_RESIZE,
    data
  };
}

export function changeText(text) {
  return {
    type: CHANGE_TEXT,
    data: text
  };
}
