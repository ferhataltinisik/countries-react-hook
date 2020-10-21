import React, {Component} from 'react';
import Filter from "./Filter";
import SearchBox from "./SearchBox";
import {Row, Col} from "reactstrap";
import FilterClass from "./FilterClass";

class Search extends Component {
    render() {
        return (

                <Row className="searchRow">
                    <Col xs="9">
                        <SearchBox/>
                    </Col>
                    <Col xs="3">
                        <FilterClass/>
                    </Col>
                </Row>

        );
    }
}

export default Search;
