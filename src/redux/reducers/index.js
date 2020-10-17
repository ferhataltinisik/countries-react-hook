import {combineReducers} from "redux";
import listCountryReducer from "./listCountryReducer"
import changeCountryReducer from "./changeCountryReducer"

const rootReducer = combineReducers({
    changeCountryReducer:changeCountryReducer,
    listCountryReducer: listCountryReducer
})


export default rootReducer;
