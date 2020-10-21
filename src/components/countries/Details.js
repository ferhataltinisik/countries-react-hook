import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import {Container} from "@material-ui/core";
import {bindActionCreators} from "redux";
import * as listCountryActions from "../../redux/actions/listCountryActions";
import * as countryActions from "../../redux/actions/countryActions";
import {connect} from 'react-redux';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import NumberFormat from 'react-number-format';
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";


class Details extends Component {
    constructor(props) {
        super(props);
        let NumberFormat = require('react-number-format');
    }

    componentDidMount() {
        let countryName = this.props.match.params.countryName;
        this.props.actions.getCountryByName(countryName);
    }

    render() {
        return (
            <div className="country-details ">
                <div>
                    <Link to={`/`}>
                    <Button variant="contained" color="primary" size="large">
                        Back
                    </Button>
                    </Link>
                </div>

                <Container className="mt-5">
                    {this.props.currentCountry.map(country => (
                        <div>
                            <Card className="test">

                                <CardMedia
                                    className="media-details "
                                    image={country.flag}
                                    title="Country Flag"
                                />
                            </Card>
                            <Card className="country-details-text test">
                                <CardContent>
                                    <Typography variant="h3" className="text-lg-center mb-5" color="textPrimary"
                                                gutterBottom>
                                        <p> {country.name}</p>
                                    </Typography>
                                    <div className="col">
                                        <div className="col-md-6 float-lg-left text-lg-left">
                                            <Typography variant="h5" className="" color="textPrimary" gutterBottom>
                                                <p><b>Capital Center: </b> {country.capital}</p>
                                            </Typography>
                                            <Typography variant="h5" className="" color="textPrimary" gutterBottom>
                                                {country.languages.map(language => (
                                                    <div>
                                                        <p><b>Language: </b> {language.name}</p>
                                                        <p><b>Native Name:</b> {language.nativeName}</p>
                                                    </div>

                                                ))}
                                            </Typography>
                                        </div>
                                        <div className="col-md-6 float-lg-left text-lg-left">
                                            <Typography variant="h5" className="" color="textPrimary" gutterBottom>
                                                <p><b>Population:</b>  <NumberFormat value={country.population}
                                                                                   displayType={'text'}
                                                                                   thousandSeparator={true}/></p>
                                            </Typography>
                                            <Typography variant="h5" className="" color="textPrimary" gutterBottom>
                                                {country.currencies.map(currency => (
                                                    <div>
                                                        <p><b>Currency:</b> {currency.name}</p>
                                                        <p><b>Currency Code:</b> {currency.code}</p>
                                                    </div>
                                                ))}
                                            </Typography>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    ))};
                </Container>

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        currentCountry: state.countryReducer,

    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            getCountryByName: bindActionCreators(countryActions.getCountryByName, dispatch),
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Details);

