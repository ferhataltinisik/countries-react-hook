import React, {Component} from 'react';
import Filter from "./Filter";
import SearchBox from "./SearchBox";
import {Row, Col} from "reactstrap";

class Search extends Component {
    render() {
        return (
            <div className="search">
                <Row className="searchRow">
                    <Col xs="9">
                        <SearchBox/>
                    </Col>
                    <Col xs="3">
                        <Filter/>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Search;
