import {combineReducers} from "redux";
import listCountryReducer from "./listCountryReducer"
import countryReducer from "./countryReducer"
import searchCountryReducer from "./searchCountryReducer"

const rootReducer = combineReducers({
    listCountryReducer:listCountryReducer,
    countryReducer: countryReducer,
    searchCountryReducer: searchCountryReducer
})


export default rootReducer;
