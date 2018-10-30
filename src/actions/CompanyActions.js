import axios from 'axios'
import { API_URL_1 } from '../supports/api-url/apiurl'
import { GET_COMPANIES }from './types'

export const getCompanies = () => {
    return(dispatch) => {
        axios.get(API_URL_1 + "/companies")
        .then(res => {
            console.log(res)
                dispatch ({
                    type: GET_COMPANIES,
                    payload: res.data
                })
        }).catch(err => {
            console.log(err);
        })
    }
}

export const createCompany = (company) => {
    return(dispatch) => {
        axios.post(API_URL_1 + "/companies", company)
        .then(res => {
            console.log(res)
            dispatch(
                getCompanies()
            )
        }).catch(err => {
            console.log(err);
        })
    }
};

export const deleteCompany = (companyId) => {
    return(dispatch) => {
        axios.delete(API_URL_1 + "/companies/" + companyId)
        .then(res => {
            console.log(res)
            dispatch(
                getCompanies()
            )
        }).catch(err => {
            console.log(err);
        })
    }
}
