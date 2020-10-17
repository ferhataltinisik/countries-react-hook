import React from 'react';

import './App.css';
import Navi from "./components/navi/Navi";
import CountriesGrid from "./components/countries/CountryListClass";

import Search from "./components/search/Search";

import CountryListFunction from "./components/countries/CountryList";
import CountryListClass from "./components/countries/CountryListClass";
import CountryList from "./components/countries/CountryList";

function App() {
    return (
        <div className="App">
            <Navi/>
            <Search/>
            <CountryList/>

        </div>
    );
}

export default App;
