import React, {useState, useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    root: {
        maxWidth: 245,
    },
    media: {
        height: 140,
    },
});

const CountryList = () => {
    const classes = useStyles();
    const [countries, setCountry] = useState([]);

    useEffect(() => {
        fetch("https://restcountries.eu/rest/v2/all")
            .then(response => response.json())
            .then(countries => setCountry(countries))
    });

    return (
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
    );
}

export default (CountryList);
