import { combineReducers } from 'redux';
import { keys, listObj } from '../../pages/api/InterfaceAndType';
import rlist from './rlist';
import reload from './reload'


export interface reduxState{
    rlist : {
        list : keys, // Object : Object의 형태
        savedList : listObj // Object : Array의 형태
    },
}

const rootReducer = combineReducers({
    rlist,
})

export default rootReducer;