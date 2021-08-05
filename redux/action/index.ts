const GET_LIST = 'GET_LIST';

import { RestaurantObj } from '../../pages/api/InterfaceAndType';
import { request } from '../../pages/api/suncheon';


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
