import React, {useContext, useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {countryContext} from "../../context/countryContext";

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 100,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const regions = ["All", "Africa", "Asia", "Americas", "Europe", "Oceania"];

function Filter() {
    let formControl="formControl";
    const classes = useStyles(formControl);
    const [searchKeyWord, setSearchKeyWord] = useState("");
    const {theme, countries, filteredCountries, setFilteredCountries} = useContext(countryContext)
    const [region, setRegion] = useState("all");

    const handleChange = (e) => {
        e.preventDefault();
        setSearchKeyWord(e.target.value);
    };

    useEffect(() => {
        if (filteredCountries.length!==0) {
            setFilteredCountries(
                filteredCountries.filter((country) =>
                    country.region.toLowerCase().startsWith(searchKeyWord.toLowerCase())),
            )
        } else {
            setFilteredCountries(
                countries.filter((country) =>
                    country.region.toLowerCase().startsWith(searchKeyWord.toLowerCase()))
            )
        };

    }, [searchKeyWord, setFilteredCountries]);



    return (
        <div>

            <FormControl variant="outlined" className={classes}>
                <InputLabel id="demo-simple-select-outlined-label" className={theme==="dark" ? "filterBox" : null}>Filter by region</InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"

                    value={searchKeyWord}
                    onChange={handleChange}
                    label="Age"
                >
                    {regions.map(region => (
                        <MenuItem className="menuItem" value={region} key={region}>
                            {region}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}

export default Filter;
