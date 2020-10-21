import React, {useState, useEffect, useContext, useReducer} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import initialState from "../../redux/reducers/initialState";
import listCountryReducer from "../../redux/reducers/listCountryReducer";


const useStyles = makeStyles({
    root: {
        maxWidth: 245,
    },
    media: {
        height: 140,
    },
});

const CountryList = (props) => {

    //const {countries, getCountries, test} = useContext();
    const classes = useStyles();
    //const [countries, setCountry] = useState([]);
    // useEffect(() => {
    //     getCountries();
    // });
/*
    useEffect(() => {
        fetch("https://restcountries.eu/rest/v2/all")
            .then(response => response.json())
            .then(countries => setCountry(countries))
    });

 */


    const [state, dispatch] = useReducer(listCountryReducer, initialState);
    return (
        <div>
            Count: {state.currentCountry.countryName}
            <h1>Context Data: {}</h1>
        </div>
    /*
    <div className="col mt-3">

        {countries.map(country => (
            <div className="col-md-3 mt-5 mb-5 cardx">
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={country.flag}
                            title="Countries in the World"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {country.name}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                <h5>Population :{country.population} </h5>
                                <h5>Region : {country.region}</h5>
                                <h5>Capital : {country.capital}</h5>
                                <h5>Currency :{country.currencies.name}</h5>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Share
                        </Button>
                        <Button size="small" color="primary">
                            Show More
                        </Button>
                    </CardActions>
                </Card>
            </div>
        ))}

    </div>
    */

    );
}

export default (CountryList);
