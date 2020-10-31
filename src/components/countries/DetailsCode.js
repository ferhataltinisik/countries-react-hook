import React, {useContext, useEffect} from 'react';
import {Container} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import NumberFormat from 'react-number-format';
import Button from "@material-ui/core/Button";
import {Link, useParams} from "react-router-dom";
import {countryContext} from "../../context/countryContext";


const DetailsCode = () => {
    const {theme, countryDetails, getCountryByName, getCountryByCode} = useContext(countryContext)
    const {countryName, countryCode} = useParams();


    useEffect(() => {
        getCountryByCode(countryCode);
    }, [getCountryByCode]);

    return (
        <div className="country-details">
            <div>
                <Link to={`/`}>
                    <Button variant="contained" color="primary" size="large">
                        Back
                    </Button>
                </Link>
            </div>

            <Container className="mt-5">
                {countryDetails.map(country => (
                    <div>
                        <div className="float-left mr-3 mb-4">
                            <Card >
                                <CardMedia
                                    className="media-details "
                                    image={country.flag}
                                    title="Country Flag"
                                />
                            </Card>
                        </div>
                        <div className="float-left">
                            <Card className={theme === "dark" ? "dark-card" : null}>
                                <CardContent className="country-details-text">
                                    <h3 className="text-lg-center mb-5" color="textPrimary">
                                        <p> {country.name}</p>
                                    </h3>
                                    <div className="col">
                                        <div className="col-md-6 float-lg-left text-lg-left">
                                            <h5 color="textPrimary">
                                                <p><b>Capital:</b> {country.capital}</p>
                                            </h5>
                                            <h5 color="textPrimary">
                                                {country.languages.map(language => (
                                                    <div>
                                                        <p><b>Language: </b> {language.name}</p>
                                                    </div>

                                                ))}
                                            </h5>
                                            <h5 color="textPrimary">
                                                {country.currencies.map(currency => (
                                                    <div>
                                                        <p><b>Currency:</b> {currency.name}</p>
                                                    </div>
                                                ))}
                                            </h5>

                                        </div>
                                        <div className="col-md-6 float-lg-left text-lg-left">
                                            <h5 color="textPrimary">
                                                <p><b>Region : </b> {country.region}</p>
                                            </h5>
                                            <h5 color="textPrimary">
                                                <p><b>Sub Region: </b> {country.subregion}</p>
                                            </h5>
                                            <h5 color="textPrimary">
                                                <p><b>Population:</b> <NumberFormat value={country.population}
                                                                                    displayType={'text'}
                                                                                    thousandSeparator={true}/></p>
                                            </h5>
                                            <h5 color="textPrimary">
                                                {country.timezones.map(timezone => (
                                                    <div>
                                                        <p><b>Time Zones:</b> {timezone}</p>
                                                    </div>
                                                ))}
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="float-left mt-5 mb-5">
                                            <h5 color="textPrimary">
                                                <b>Border Countries</b>
                                            </h5>
                                            {country.borders.map(border => (
                                                <Link to={`/country-details-code/${border}`}>
                                                    <Button className="ml-4 float-left"
                                                            variant="contained" color="primary">
                                                        {border}
                                                    </Button>
                                                </Link>
                                            ))}
                                        </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                ))}
            </Container>
        </div>
    );
}

export default DetailsCode;
