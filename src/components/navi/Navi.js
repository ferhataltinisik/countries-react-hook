import React, {useContext} from 'react';
import {countryContext} from "../../context/countryContext";
import Button from "@material-ui/core/Button";

const Navi = () => {

    const {theme, setTheme} = useContext(countryContext);

    const themeToggler = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }
    return (
        <div className="text-lg-center">
            <nav id="nav-bar" className="navbar">
                <div id="logo-box">
                  <h1>Search Countries</h1>
                </div>
                <div >
                    <Button
                        onClick={themeToggler}
                            variant={theme === 'light' ? "outlined" : "contained"}
                            color={theme === 'light' ? "primary" : "dark"}>
                        {theme === 'light' ? "Switch to Dark" : "Switch to Light"}
                    </Button>
                </div>
            </nav>
        </div>
    );
}

export default Navi;

