import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState";

function changeCountryReducer(state= initialState.currentCountry, action){
    switch (action.type){
        case actionTypes.CHANGE_COUNTRY:
            return action.payload
        default:
            return state;
    }

}

export default changeCountryReducer;
