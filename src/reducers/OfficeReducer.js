const INITIAL_STATE = [];

//INITIAL_STATE => default parameter
export default (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case "USER_LOGIN_SUCCESS" :
            return {...action.payload, cookieCheck: true};
        default :   
            return state;
    }
}