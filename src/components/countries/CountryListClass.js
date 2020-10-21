import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as listCountryActions from "../../redux/actions/listCountryActions"
import NumberFormat from "react-number-format";
import {Link} from "react-router-dom";


class CountryListClass extends Component {

    constructor(props) {
        super(props);
        let NumberFormat = require('react-number-format');
    }

    componentDidMount() {
        this.props.actions.getCountries();
    }

    render() {
        return (
            <div className="">
                <div className="col test">
                    {this.props.countries.map(country => (
                        <Link to={`/country-details/${country.name}`}>
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
                                            <Typography variant="h5" color="textSecondary" component="p">
                                                <p>Population :<NumberFormat value={country.population}
                                                                             displayType={'text'}
                                                                             thousandSeparator={true}/></p>
                                                <p>Region : {country.region}</p>
                                                <p>Capital : {country.capital}</p>
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
}


function mapStateToProps(state) {
    return {
        countries: state.listCountryReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            getCountries: bindActionCreators(listCountryActions.getCountries, dispatch),

        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountryListClass);

