import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as countryActions from "../../redux/actions/countryActions"


class CountryListClass extends Component {
    componentDidMount() {
        let region ="asia"
        this.props.actions.getCountries(region);
    }

    render() {
        return (
            <div className="col test">
                {this.props.countries.map(country => (
                    <div className="col-md-3 mt-5 mb-5 cardx">
                        <Card className="root">

                            <CardActionArea>
                                <CardMedia
                                    className="media"
                                    image={country.flag}
                                    title="Contemplative Reptile"
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

}


function mapStateToProps(state) {
    return {
        currentCountry: state.changeCountryReducer,
        countries: state.listCountryReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            getCountries: bindActionCreators(countryActions.getCountries, dispatch),

        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountryListClass);

