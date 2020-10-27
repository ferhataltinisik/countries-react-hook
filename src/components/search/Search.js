import React from 'react';
import Filter from "./Filter";

import {Row, Col} from "reactstrap";
import SearchBox from "./SearchBox";


const Search = () => {

    return (
        <Row className="searchRow">
            <Col xs="9">
                <SearchBox/>
            </Col>
            <Col xs="3">
                <Filter/>
            </Col>
        </Row>
    );
}

export default Search;
