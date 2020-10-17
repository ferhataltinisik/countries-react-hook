import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState";

function listCountryReducer(state= initialState.countries, action){
    switch (action.type){
        case actionTypes.GET_COUNTRIES_SUCCESS:
            return action.payload
        default:
            return state;
    }

}

export default listCountryReducer;
