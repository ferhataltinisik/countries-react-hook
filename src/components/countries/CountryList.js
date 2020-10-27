import React, {useContext, useEffect, useRef} from 'react';
import {countryContext} from "../../context/countryContext";
import CardActionArea from "@material-ui/core/CardActionArea";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {Link} from "react-router-dom";


const CountryList = () => {
    const {countries, getCountries, filteredCountries} = useContext(countryContext);

    useEffect(() => {
        getCountries();
    }, []);


    return (
        <div>
            <div className="col mt-3">
                {filteredCountries && filteredCountries.length!==0
                    ? filteredCountries.map((country) => (
                        <Link to={`/country-details/${country.name}`}>
                            <div className="col-md-3 mt-5 mb-5 countryCard" key={country.alpha3Code}>
                                <Card className="root">
                                    <CardActionArea>
                                        <CardMedia
                                            className="media"
                                            image={country.flag}
                                            title="Countries in the World"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {country.name}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                Population :{country.population}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                Region : {country.region}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                Capital : {country.capital}>
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                Currency :{country.currencies.name}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </div>
                        </Link>
                    ))
                    : countries.map((country) => (
                        <Link to={`/country-details/${country.name}`}>
                            <div className="col-md-3 mt-5 mb-5 countryCard" key={country.alpha3Code}>
                                <Card className="root">
                                    <CardActionArea>
                                        <CardMedia
                                            className="media"
                                            image={country.flag}
                                            title="Countries in the World"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {country.name}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                Population :{country.population}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                Region : {country.region}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                Capital : {country.capital}>
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                Currency :{country.currencies.name}
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



