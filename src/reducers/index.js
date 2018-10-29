import {combineReducers} from 'redux'
import CompanyReducer from './CompanyReducer'
import OfficeReducer from './OfficeReducer'

//Creates Global State
export default combineReducers({
    companies: CompanyReducer,
    offices: OfficeReducer
})
