import React, {Component} from 'react';
import Search from "../search/Search";
import CountryListClass from "./CountryListClass";

class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard">
                <Search/>
                <CountryListClass/>
            </div>
        );
    }
}

export default Dashboard;
