import React from 'react';

import './App.css';
import Navi from "./components/navi/Navi";
import Details from "./components/countries/Details";
import {Route, Switch} from "react-router-dom";
import Dashboard from "./components/countries/Dashboard";
import Container from "@material-ui/core/Container";


function App() {
    return (
        <div>
            <Navi/>
            <Container>
                <Switch>
                    <Route path="/" exact component={Dashboard}/>
                    <Route path="/country-details/:countryName" exact component={Details}/>
                </Switch>
            </Container>
        </div>

    );
}

export default App;
