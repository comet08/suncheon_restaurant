const GET_LIST = 'GET_LIST';
const SAVE_SELECTED = 'SAVE_SELECTED'
const FETCH_USER = 'FETCH_USER'

import { RestaurantObj, InitRestaurant } from '../api/InterfaceAndType';
import { request } from '../api/suncheon';


export const getList = ()=>{ 
    return((dispatch : any)=>{
        request()
        .then((res)=>{
            dispatch({
                type : GET_LIST,
                rlist : res
            });
         });
        
    })
}

export const saveSelected = (dong : string, values : Array<RestaurantObj>)=>{
    return((dispatch:any)=>{
        dispatch({
            type : SAVE_SELECTED,
            dong,
            values
        })
    })
}

export const fetchUser = (user : any) =>{
    return((dispatch : any)=>{
        dispatch({
            type : FETCH_USER,
            user
        })
    })
}