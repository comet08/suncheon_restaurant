const FETCH_USER = 'FETCH_USER';

const initialState = {
    userState : {}
}


const user = (state = initialState, action:any ) => {
    if(action.type == FETCH_USER){
        return {
            ...state,
            userState : action.user
        }
    }
    else
        return state;
}

export default user;