import axios from 'axios';
import { keys, RestaurantObj } from './InterfaceAndType';

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const API_END_POINT = `https://api.odcloud.kr/api/3076984/v1/uddi:9cf29e6c-8085-494f-825a-849a727ad7eb_201910071627?`;

const classification = (list : Array<RestaurantObj>) : keys =>{
    let dongObj : keys = {};
    for(let i = 0 ; i < list.length; i++){
        let dong = list[i]['읍면동'];
        let name = list[i]['업  소  명']
 
        dongObj[dong] = {
            ...dongObj[dong],
            [name] : list[i]
        }
    }
    return dongObj;
    
}

export const request = async () => {
    let list = [];
    const per_page = 10;
    for(let i = 1; i <=6 ;i++){
        let new_url = API_END_POINT;
        new_url += `page=${i}`;
        new_url += `&per_page=${per_page}`;
        new_url += `&serviceKey=${API_KEY}`;

        try{
            const res = await axios.get(new_url);
            list.push(...res.data.data);
        }catch(e){
            console.log(e.message)
        }
    }
    return await classification(list)
}