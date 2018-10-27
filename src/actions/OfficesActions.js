import axios from 'axios'
import { API_URL_1 } from '../supports/api-url/apiurl'
import { GET_OFFICES } from './types'

export const createOffice = (office) =>{
    return(dispatch) => {
        axios.post(API_URL_1 + "/offices", office)
        .then(res => {
            console.log(res)
                dispatch (
                    getOffices()
                )
        }).catch(err => {
            console.log(err);
        })
    }
};

export const getOffices = () =>{
    return(dispatch) => {
        axios.get(API_URL_1 + "/offices")
        .then(res => {
            console.log(res)
                dispatch ({ 
                    type: GET_OFFICES,
                    payload: res.data
                })
        }).catch(err => {
            console.log(err);
        })
    }
};


export const deleteOffice = (officeId) => {
    return(dispatch) => {
        axios.delete(API_URL_1 + "/offices/" + officeId)
        .then(res => {
            console.log(res)
            dispatch(
                getOffices()
            )
        }).catch(err => {
            console.log(err);
        })
    }
}
