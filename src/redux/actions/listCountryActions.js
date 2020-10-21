import * as actionTypes from "./actionTypes"

export function getCountryByNameSuccess(country) {
    return {type: actionTypes.GET_COUNTRY_BY_NAME_SUCCESS, payload: country}
}

export function getCountriesSuccess(countries) {
    return {
        type: actionTypes.GET_COUNTRIES_SUCCESS, payload: countries
    }
}


export function getCountries(region) {
    return function (dispatch) {
        let url = "https://restcountries.eu/rest/v2/"
        if (!region){
            url += "all/"
        }else {
            url +="region/"+region
        }
        return fetch(url)
            .then(response => response.json())
            .then(countries => dispatch(getCountriesSuccess(countries)))
    }
}

