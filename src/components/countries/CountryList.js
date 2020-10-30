import React, {useContext, useEffect} from 'react';
import {countryContext} from "../../context/countryContext";
import CardActionArea from "@material-ui/core/CardActionArea";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {Link} from "react-router-dom";
import NumberFormat from "react-number-format";
import Button from "@material-ui/core/Button";



const CountryList = () => {
    const {theme, countries, getCountries, filteredCountries, setFilteredCountries} = useContext(countryContext);


    useEffect(() => {
        if (filteredCountries.length==0){
            getCountries();
        }

        console.log("CountryList Component useEffect is running:")
    }, [setFilteredCountries]);

    return (
        <div>
            <div className="col mt-3">
                {filteredCountries.length!==0 ? filteredCountries.map((country) => (
                        <Link to={`/country-details/${country.name}`}>
                            <div className="col-md-3 mt-5 mb-5 comp-position " key={country.alpha3Code} >
                                <Card className={theme==="dark" ? "dark-card card" : "card"}>
                                    <CardActionArea >
                                        <CardMedia
                                            className="media"
                                            image={country.flag}
                                            title="Countries in the World"
                                        />
                                        <CardContent >
                                            <Typography gutterBottom variant="h5" component="h2">
                                                <b>{country.name}</b>
                                            </Typography>
                                            <Typography variant="h6">
                                                Population: <NumberFormat value={country.population}
                                                                          displayType={'text'}
                                                                          thousandSeparator={true}/>
                                            </Typography>
                                            <Typography variant="h6">
                                                Region : {country.region}
                                            </Typography>
                                            <Typography variant="h6">
                                                Capital : {country.capital}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </div>
                        </Link>
                    ))
                    : countries.map((country) => (
                        <Link to={`/country-details/${country.name}`}>
                            <div className="col-md-3 mt-5 mb-5 comp-position " key={country.alpha3Code}>

                                <Card className={theme==="dark" ? "dark-card card" : "card"}>
                                        <CardActionArea >
                                        <CardMedia
                                            className="media"
                                            image={country.flag}
                                            title="Countries in the World"
                                        />
                                        <CardContent >
                                            <Typography gutterBottom variant="h5" component="h2">
                                                <b>{country.name}</b>
                                            </Typography>
                                            <Typography variant="h6">
                                                Population: <NumberFormat value={country.population}
                                                                                    displayType={'text'}
                                                                                    thousandSeparator={true}/>
                                            </Typography>
                                            <Typography variant="h6">
                                                Region : {country.region}
                                            </Typography>
                                            <Typography variant="h6">
                                                Capital : {country.capital}
                                            </Typography>
                                            <Typography variant="h6">
                                                {country.borders.map(border => (
                                                    <Link to={`/country-code/${border}`}>
                                                        <Button  className="ml-4 float-left"
                                                                 variant="contained" color="primary">
                                                            {border}
                                                        </Button>
                                                    </Link>
                                                ))}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </div>
                        </Link>
                    ))}
            </div>
        </div>
    );
}


export default (CountryList);



