import * as actionTypes from "./actionTypes"

export function changeCountry(country) {
    return {type: actionTypes.CHANGE_COUNTRY, payload: country}
}

export function getCountriesSuccess(countries) {
    return {
        type: actionTypes.GET_COUNTRIES_SUCCESS, payload: countries
    }
}

export function getCountries(region) {
    return function (dispatch) {
        let url = "https://restcountries.eu/rest/v2/"
        if(region=="all"){
            url += region;
        }else{
            url += "region/"+region;
        }
        return fetch(url)
            .then(response => response.json())
            .then(countries => dispatch(getCountriesSuccess(countries)))
    }
}



// https://restcountries.eu/rest/v2/region/europe
// https://restcountries.eu/rest/v2/all
