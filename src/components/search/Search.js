import React from 'react';
import Filter from "./Filter";
import SearchBox from "./SearchBox";


const Search = () => {

    return (
        <div className="col">
            <div className="col-md-9 mt-2 mb-3 float-left">
                <SearchBox/>
            </div>
            <div className="col-md-3 mt-3 mb-2 float-left">
                <Filter/>
            </div>
        </div>
    );
}

export default Search;
