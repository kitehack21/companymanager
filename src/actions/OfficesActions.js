import axios from 'axios'
import {API_URL_1} from '../supports/api-url/apiurl'

export const createOffice = (office) =>{
    return(dispatch) => {
        axios.get(API_URL_1 + "/companies", office
        ).then(res => {
            console.log(res)
                dispatch ({
                    type: "USER_LOGIN_SUCCESS",
                    payload: {username: res.data.user.username, email: res.data.user.email, id: res.data.user.id, subscription: res.data.subscription.status, error: ""}
                })
        }).catch(err => {
            console.log(err);
                dispatch({
                    type: "USER_LOGIN_FAIL"
                })
        })
    }
};
