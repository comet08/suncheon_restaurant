import { listObj, keys } from '../../pages/api/InterfaceAndType';

const GET_LIST = 'GET_LIST';
const SAVE_SELECTED = 'SAVE_SELECTED';

const initialState = {
  list: {},
  savedList: {},
};

interface rlistObj {
  list: keys;
  savedList: listObj;
}

const rlist = (state: rlistObj = initialState, action: any): rlistObj => {
  if (action.type == GET_LIST)
    return {
      ...state,
      list: action.rlist,
    };
  else if (action.type == SAVE_SELECTED) {
    let new_list = state.savedList;
    if (new_list[action.dong]) delete new_list[action.dong];
    else new_list[action.dong] = action.values;
    return {
      ...state,
      savedList: { ...new_list },
    };
  } else return state;
};

export default rlist;
