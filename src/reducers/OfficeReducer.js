import { GET_OFFICES } from '../actions/types'

const INITIAL_STATE = [];

//INITIAL_STATE => default parameter
export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case GET_OFFICES :
            return action.payload;
        default :   
            return state;
    }
}