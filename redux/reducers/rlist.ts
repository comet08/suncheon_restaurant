import { listObj, keys } from "../../pages/api/InterfaceAndType";

const GET_LIST = 'GET_LIST';

const initialState = {
    list : {},
    savedList : {}
};

interface rlistObj{
    list : keys,
    savedList : listObj
}

const rlist = (state : rlistObj = initialState, action:any ) : rlistObj => {
    if(action.type == GET_LIST)
        return {
            ...state,
            list : action.rlist
        }
    else
        return state;
}

export default rlist;