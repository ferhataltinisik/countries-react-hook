import React, {createContext, useState, useContext, useEffect} from "react";


export const CountryContext = React.createContext();


export const useCountries = () => useContext(CountryContext);


 const CountryProvider = ({ children }) => {

     const [countries, setCountry] = useState([]);
     const [test, setTest] = useState(["test deneme Alo Melo"]);

     const getCountries = (region) => {
         return function (dispatch) {
             let url = "https://restcountries.eu/rest/v2/"
             if(region=="all"){
                 url += region;
             }else{
                 url += "region/"+region;
             }
             return fetch(url)
                 .then(response => response.json())
                 .then(countries => dispatch(setCountry(countries)))
         }
     }

    return (
        <CountryContext.Provider value={{ test, getCountries }} >
            {children}
        </CountryContext.Provider>
    );

}

export default CountryProvider;

