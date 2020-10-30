import React, {createContext, useState} from "react";


export const countryContext = createContext();

const CountryProvider = ({children}) => {

    const [countries, setCountry] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [countryDetails, setCountryDetails] = useState([]);
    const [theme, setTheme] = useState("light");
    const [searchItem, setSearchItem] = useState('searchItem test');


    const getCountries = (region) => {
        let url = "https://restcountries.eu/rest/v2/"
        if (!region || region=="All") {
            url += "all/"
        } else {
            url += "region/" + region
        }
        fetch(url)
            .then(response => response.json())
            .then(countries => setCountry(countries))
    }


    const getCountryByCode = (code) => {
        let url = "https://restcountries.eu/rest/v2/alpha/"
        url += code
        fetch(url)
            .then(response => response.json())
            .then(country => setCountryDetails(country))
    }

    const getCountryByName = (country) => {
        let url = "https://restcountries.eu/rest/v2/name/"
        url += country + "?fullText=true"
        fetch(url)
            .then(response => response.json())
            .then(country => setCountryDetails(country))
    }


    return (
        <countryContext.Provider
            value={{
                countries,
                setCountry,
                countryDetails,
                setCountryDetails,
                getCountries,
                getCountryByName,
                theme,
                setTheme,
                searchItem,
                setSearchItem,
                filteredCountries,
                setFilteredCountries,
                getCountryByCode
            }}>
            {children}
        </countryContext.Provider>
    );

}

export default CountryProvider;

