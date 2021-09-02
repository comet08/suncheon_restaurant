import { combineReducers } from 'redux';
import { keys, listObj } from '../../pages/api/InterfaceAndType';
import rlist from './rlist';
import user from './user'

export interface reduxState{
    rlist : {
        list : keys,
        savedList : listObj,
    },
    user : {
        userState : any
    }
}

const rootReducer = combineReducers({
    rlist,
    user
})

export default rootReducer;