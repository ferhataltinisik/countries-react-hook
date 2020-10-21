import * as actionTypes from "./actionTypes"

export function filterCountry(country) {
    return {type: actionTypes.FILTER_COUNTRIES_SUCCESS, payload: country}
}

