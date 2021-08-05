import { combineReducers } from 'redux';
import { keys, listObj } from '../../pages/api/InterfaceAndType';
import rlist from './rlist';
import reload from './reload'


export interface reduxState{
    rlist : {
        list : keys,
        savedList : listObj
    },
}

const rootReducer = combineReducers({
    rlist,
})

export default rootReducer;