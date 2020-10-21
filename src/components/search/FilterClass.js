import React, {useState, Component} from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {bindActionCreators} from "redux";
import * as listCountryActions from "../../redux/actions/listCountryActions";
import {connect} from "react-redux";


class FilterClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            regions: ["All", "Africa", "Asia", "Americas", "Europe", "Oceania"],

        };
    }
     componentDidMount() {
        this.props.actions.getCountries();
    }

    handleChange = (e) => {
        this.props.actions.getCountries(e.target.value);
    };


    render() {
        return (
            <div>
                <FormControl variant="outlined" className="formControl">
                    <InputLabel id="demo-simple-select-outlined-label">Filter Continent</InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={this.region}
                        onChange={this.handleChange}
                        label="Age"
                    >
                        {this.state.regions.map(region => (
                            <MenuItem className="menuItem" value={region} key={region}>
                                {region}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <div>

                </div>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {}
}


function mapDispatchToProps(dispatch) {
    return {
        actions: {
            getCountries: bindActionCreators(listCountryActions.getCountries, dispatch),
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterClass);


