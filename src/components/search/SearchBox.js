import React, {useState, useContext, useEffect, useRef} from "react";
import {countryContext} from "../../context/countryContext";


const SearchBox = () => {

    const {theme, countries, filteredCountries, setFilteredCountries, getCountries} = useContext(countryContext);
    const [searchKeyWord, setSearchKeyWord] = useState("");

    const inputChangeHandler = (e) => {
        e.preventDefault();
        setSearchKeyWord(e.target.value);
    }


    useEffect(() => {
        if (searchKeyWord) {
            setFilteredCountries(
                countries.filter((country) =>
                    country.name.toLowerCase().startsWith(searchKeyWord.toLowerCase())),
            );
        }
    }, [searchKeyWord]);


    console.log("Filtered Countries:" + JSON.stringify(filteredCountries))

    return (
        <div>
            <div
                className="justify-self-start pr-6/12"
            >
                <input
                    className="justify-self-start shadow pr-16"
                    onChange={inputChangeHandler}
                    type="text"
                    value={searchKeyWord}
                    placeholder="Search"
                />
            </div>
        </div>
    );
}

export default SearchBox;
