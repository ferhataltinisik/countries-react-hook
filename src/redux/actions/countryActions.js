import * as actionTypes from "./actionTypes"

export function getCountryByNameSuccess(country) {
    return {type: actionTypes.GET_COUNTRY_BY_NAME_SUCCESS, payload: country}
}


export function getCountryByName(country) {
    return function (dispatch) {
        let url = "https://restcountries.eu/rest/v2/name/"
            url +=country+"?fullText=true"
        return fetch(url)
            .then(response => response.json())
            .then(country => dispatch(getCountryByNameSuccess(country)))
    }
}

