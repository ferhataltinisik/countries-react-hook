import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState";

function searchCountryReducer(state= initialState.currentCountry, action){
    switch (action.type){
        case actionTypes.GET_COUNTRY_BY_NAME_SUCCESS:
            return action.payload
        default:
            return state;
    }

}

export default searchCountryReducer;
