import { GET_COMPANIES } from '../actions/types'

const INITIAL_STATE = [];
export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case GET_COMPANIES :
            return action.payload;
        default :   
            return state;
    }
}