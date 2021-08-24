const GET_LIST = 'GET_LIST';
const SAVE_SELECTED = 'SAVE_SELECTED';

import { RestaurantObj } from '../../pages/api/InterfaceAndType';
import { request } from '../../pages/api/suncheon';

export const getList = () => {
  return (dispatch: any) => {
    request().then((res) => {
      dispatch({
        type: GET_LIST,
        rlist: res,
      });
    });
  };
};

export const saveSelected = (dong: string, values: Array<RestaurantObj>) => {
  return (dispatch: any) => {
    dispatch({
      type: SAVE_SELECTED,
      dong,
      values,
    });
  };
};
