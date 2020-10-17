/* eslint-disable no-use-before-define */
import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

 const SearchBox = () => {

    return (
        <Autocomplete
            id="combo-box-demo" className="searchBox"
            options={top100Films}
            getOptionLabel={(option) => option.title}
            style={{ width: 500 }}
            renderInput={(params) => <TextField {...params} label="Search Country" variant="outlined" />}
        />
    );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },

];



export default SearchBox;
