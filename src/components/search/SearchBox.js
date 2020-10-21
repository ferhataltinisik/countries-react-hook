/* eslint-disable no-use-before-define */
import React, {Component, useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {bindActionCreators} from "redux";
import * as filterCountryActions from "../../redux/actions/filterCountryActions";
import {connect} from "react-redux";
import {queryCache} from "react-query";

class SearchBox extends Component {
    constructor(props) {
        super(props);
        this.state = {searchTerm: ""};

    }

    handleChange = (e) => {
        this.setState({
            searchTerm: e.target.value
        });
        this.props.actions.filterCountry(queryCache.getQueryData(["", { id: this.props.countries.name.id }]));

        if(this.searchTerm){
            this.props.actions.filterCountry({
                data: queryCache.getQueryData().data.filter((countries) =>
                    countries.name.toLowerCase().startsWith(this.searchTerm.toLocaleLowerCase())
                ),

            });
        }
    };

    render() {

        return (
            <Autocomplete
                id="combo-box" className="searchBox"
                options={countryNames}
                onChange={this.handleChange}
                getOptionLabel={(option) => option.title}
                style={{width: 500}}
                renderInput={(params) => <TextField {...params} label="Search Country" variant="outlined"/>}
            />
        );

    }

}


const countryNames = [
    {title: 'Afghanistan'},
    {title: 'Åland Islands'},
    {title: 'Albania'},
    {title: 'Algeria'},
    {title: 'American Samoa'},
    {title: 'Andorra'},
    {title: 'Angola'},
    {title: 'Anguilla'},
    {title: 'Antarctica'},
    {title: 'Antigua and Barbuda'},
    {title: 'Argentina'},
    {title: 'Armenia'},
    {title: 'Aruba'},
    {title: 'Australia'},
    {title: 'Austria'},
    {title: 'Azerbaijan'},
    {title: 'Bahamas'},
    {title: 'Bahrain'},
    {title: 'Bangladesh'},
    {title: 'Barbados'},
    {title: 'Belarus'},
    {title: 'Belgium'},
    {title: 'Belize'},
    {title: 'Benin'},
    {title: 'Bermuda'},
    {title: 'Bhutan'},
    {title: 'Bolivia (Plurinational State of)'},
    {title: 'Bonaire, Sint Eustatius and Saba'},
    {title: 'Bosnia and Herzegovina'},
    {title: 'Botswana'},
    {title: 'Bouvet Island'},
    {title: 'Brazil'},
    {title: 'British Indian Ocean Territory'},
    {title: 'United States Minor Outlying Islands'},
    {title: 'Virgin Islands (British)'},
    {title: 'Virgin Islands (U.S.)'},
    {title: 'Brunei Darussalam'},
    {title: 'Bulgaria'},
    {title: 'Burkina Faso'},
    {title: 'Burundi'},
    {title: 'Cambodia'},
    {title: 'Cameroon'},
    {title: 'Canada'},
    {title: 'Cabo Verde'},
    {title: 'Cayman Islands'},
    {title: 'Central African Republic'},
    {title: 'Chad'},
    {title: 'Chile'},
    {title: 'China'},
    {title: 'Christmas Island'},
    {title: 'Cocos (Keeling) Islands'},
    {title: 'Colombia'},
    {title: 'Comoros'},
    {title: 'Congo'},
    {title: 'Congo (Democratic Republic of the)'},
    {title: 'Cook Islands'},
    {title: 'Costa Rica'},
    {title: 'Croatia'},
    {title: 'Cuba'},
    {title: 'Curaçao'},
    {title: 'Cyprus'},
    {title: 'Czech Republic'},
    {title: 'Denmark'},
    {title: 'Djibouti'},
    {title: 'Dominica'},
    {title: 'Dominican Republic'},
    {title: 'Ecuador'},
    {title: 'Egypt'},
    {title: 'El Salvador'},
    {title: 'Equatorial Guinea'},
    {title: 'Eritrea'},
    {title: 'Estonia'},
    {title: 'Ethiopia'},
    {title: 'Falkland Islands (Malvinas)'},
    {title: 'Faroe Islands'},
    {title: 'Fiji'},
    {title: 'Finland'},
    {title: 'France'},
    {title: 'French Guiana'},
    {title: 'French Polynesia'},
    {title: 'French Southern Territories'},
    {title: 'Gabon'},
    {title: 'Gambia'},
    {title: 'Georgia'},
    {title: 'Germany'},
    {title: 'Ghana'},
    {title: 'Gibraltar'},
    {title: 'Greece'},
    {title: 'Greenland'},
    {title: 'Grenada'},
    {title: 'Guadeloupe'},
    {title: 'Guam'},
    {title: 'Guatemala'},
    {title: 'Guernsey'},
    {title: 'Guinea'},
    {title: 'Guinea-Bissau'},
    {title: 'Guyana'},
    {title: 'Haiti'},
    {title: 'Heard Island and McDonald Islands'},
    {title: 'Holy See'},
    {title: 'Honduras'},
    {title: 'Hong Kong'},
    {title: 'Hungary'},
    {title: 'Iceland'},
    {title: 'India'},
    {title: 'Indonesia'},
    {title: 'Côte d\'Ivoire'},
    {title: 'Iran (Islamic Republic of)'},
    {title: 'Iraq'},
    {title: 'Ireland'},
    {title: 'Isle of Man'},
    {title: 'Israel'},
    {title: 'Italy'},
    {title: 'Jamaica'},
    {title: 'Japan'},
    {title: 'Jersey'},
    {title: 'Jordan'},
    {title: 'Kazakhstan'},
    {title: 'Kenya'},
    {title: 'Kiribati'},
    {title: 'Kuwait'},
    {title: 'Kyrgyzstan'},
    {title: 'Lao People\'s Democratic Republic'},
    {title: 'Latvia'},
    {title: 'Lebanon'},
    {title: 'Lesotho'},
    {title: 'Liberia'},
    {title: 'Libya'},
    {title: 'Liechtenstein'},
    {title: 'Lithuania'},
    {title: 'Luxembourg'},
    {title: 'Macao'},
    {title: 'Macedonia (the former Yugoslav Republic of)'},
    {title: 'Madagascar'},
    {title: 'Malawi'},
    {title: 'Malaysia'},
    {title: 'Maldives'},
    {title: 'Mali'},
    {title: 'Malta'},
    {title: 'Marshall Islands'},
    {title: 'Martinique'},
    {title: 'Mauritania'},
    {title: 'Mauritius'},
    {title: 'Mayotte'},
    {title: 'Mexico'},
    {title: 'Micronesia (Federated States of)'},
    {title: 'Moldova (Republic of)'},
    {title: 'Monaco'},
    {title: 'Mongolia'},
    {title: 'Montenegro'},
    {title: 'Montserrat'},
    {title: 'Morocco'},
    {title: 'Mozambique'},
    {title: 'Myanmar'},
    {title: 'Namibia'},
    {title: 'Nauru'},
    {title: 'Nepal'},
    {title: 'Netherlands'},
    {title: 'New Caledonia'},
    {title: 'New Zealand'},
    {title: 'Nicaragua'},
    {title: 'Niger'},
    {title: 'Nigeria'},
    {title: 'Niue'},
    {title: 'Norfolk Island'},
    {title: 'Korea (Democratic People\'s Republic of)'},
    {title: 'Northern Mariana Islands'},
    {title: 'Norway'},
    {title: 'Oman'},
    {title: 'Pakistan'},
    {title: 'Palau'},
    {title: 'Palestine, State of'},
    {title: 'Panama'},
    {title: 'Papua New Guinea'},
    {title: 'Paraguay'},
    {title: 'Peru'},
    {title: 'Philippines'},
    {title: 'Pitcairn'},
    {title: 'Poland'},
    {title: 'Portugal'},
    {title: 'Puerto Rico'},
    {title: 'Qatar'},
    {title: 'Republic of Kosovo'},
    {title: 'Réunion'},
    {title: 'Romania'},
    {title: 'Russian Federation'},
    {title: 'Rwanda'},
    {title: 'Saint Barthélemy'},
    {title: 'Saint Helena, Ascension and Tristan da Cunha'},
    {title: 'Saint Kitts and Nevis'},
    {title: 'Saint Lucia'},
    {title: 'Saint Martin (French part)'},
    {title: 'Saint Pierre and Miquelon'},
    {title: 'Saint Vincent and the Grenadines'},
    {title: 'Samoa'},
    {title: 'San Marino'},
    {title: 'Sao Tome and Principe'},
    {title: 'Saudi Arabia'},
    {title: 'Senegal'},
    {title: 'Serbia'},
    {title: 'Seychelles'},
    {title: 'Sierra Leone'},
    {title: 'Singapore'},
    {title: 'Sint Maarten (Dutch part)'},
    {title: 'Slovakia'},
    {title: 'Slovenia'},
    {title: 'Solomon Islands'},
    {title: 'Somalia'},
    {title: 'South Africa'},
    {title: 'South Georgia and the South Sandwich Islands'},
    {title: 'Korea (Republic of)'},
    {title: 'South Sudan'},
    {title: 'Spain'},
    {title: 'Sri Lanka'},
    {title: 'Sudan'},
    {title: 'Suriname'},
    {title: 'Svalbard and Jan Mayen'},
    {title: 'Swaziland'},
    {title: 'Sweden'},
    {title: 'Switzerland'},
    {title: 'Syrian Arab Republic'},
    {title: 'Taiwan'},
    {title: 'Tajikistan'},
    {title: 'Tanzania, United Republic of'},
    {title: 'Thailand'},
    {title: 'Timor-Leste'},
    {title: 'Togo'},
    {title: 'Tokelau'},
    {title: 'Tonga'},
    {title: 'Trinidad and Tobago'},
    {title: 'Tunisia'},
    {title: 'Turkey'},
    {title: 'Turkmenistan'},
    {title: 'Turks and Caicos Islands'},
    {title: 'Tuvalu'},
    {title: 'Uganda'},
    {title: 'Ukraine'},
    {title: 'United Arab Emirates'},
    {title: 'United Kingdom of Great Britain and Northern Ireland'},
    {title: 'United States of America'},
    {title: 'Uruguay'},
    {title: 'Uzbekistan'},
    {title: 'Vanuatu'},
    {title: 'Venezuela (Bolivarian Republic of)'},
    {title: 'Viet Nam'},
    {title: 'Wallis and Futuna'},
    {title: 'Western Sahara'},
    {title: 'Yemen'},
    {title: 'Zambia'},
    {title: 'Zimbabwe'},


];

function mapStateToProps(state) {
    return {
        countries: state.listCountryReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            filterCountry: bindActionCreators(filterCountryActions.filterCountry, dispatch),

        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
