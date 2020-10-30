import React, {useState, useContext, useEffect} from "react";
import {countryContext} from "../../context/countryContext";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import OutlinedInput from "@material-ui/core/OutlinedInput";


const SearchBox = () => {

    const {theme, countries, filteredCountries, setFilteredCountries} = useContext(countryContext);
    const [searchKeyWord, setSearchKeyWord] = useState("");

    const handleChange = (e) => {
        e.preventDefault();
        setSearchKeyWord(e.target.value);
    }

    useEffect(() => {
        if (filteredCountries.length!==0) {
            setFilteredCountries(
                filteredCountries.filter((country) =>
                    country.name.toLowerCase().startsWith(searchKeyWord.toLowerCase())),
            )
        } else {
            setFilteredCountries(
                countries.filter((country) =>
                    country.name.toLowerCase().startsWith(searchKeyWord.toLowerCase()))
            )
        };

    }, [searchKeyWord, setFilteredCountries]);


    return (
        <div>
            <FormControl variant="outlined">
                <InputLabel htmlFor="component-outlined" className={theme === "dark" ? "filterBox" : null}>Search
                    country</InputLabel>
                <OutlinedInput id="component-outlined"
                               value={searchKeyWord}
                               onChange={handleChange}
                               label="Name"/>
            </FormControl>
        </div>
    );
}

export default SearchBox;
