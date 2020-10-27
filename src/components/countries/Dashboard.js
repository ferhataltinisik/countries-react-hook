import React from 'react';
import Search from "../search/Search";
import CountryList from "./CountryList";


const Dashboard = () => {

    return (
        <div className="dashboard">
            <Search/>
            <CountryList/>
        </div>
    )
}

export default Dashboard;
