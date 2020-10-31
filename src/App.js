import React, {useContext} from "react";

import './App.css';
import Navi from "./components/navi/Navi";
import {Route, Switch} from "react-router-dom";
import Dashboard from "./components/countries/Dashboard";
import Container from "@material-ui/core/Container";
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "../src/components/globalStyles";
import { lightTheme, darkTheme } from "../src/components/Themes"
import {countryContext} from "./context/countryContext";
import Details from "./components/countries/Details";
import DetailsCode from "./components/countries/DetailsCode";




function App() {

    const {theme} = useContext(countryContext);


    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <>
                <GlobalStyles/>
        <div className="App">
            <Navi/>
            <Container>

                <Switch>
                    <Route path="/" exact>
                        <Dashboard/>
                    </Route>
                    <Route path="/country-details/:countryName" exact component={Details}/>
                    <Route path="/country-details-code/:countryCode" exact component={DetailsCode}/>
                </Switch>
            </Container>
        </div>
            </>
        </ThemeProvider>
    );
}

export default App;
