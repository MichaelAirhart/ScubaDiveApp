import React from 'react';

import axios from 'axios';
import { Switch, Route } from 'react-router-dom'

import Title from './title';
import Login from './Profile/login';
import Search from './SearchDives/search';

import googleAPIKey from '../../config/apiKey';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            zipCode: '',
            latitude: '',
            longitude: '',
            diveSpots: [],
            showSearchResults: false,
        }
    }

    // search function will take in the provided address/zip code of the user 
    // using the zip code and google API lat & lng are provided which can then be used in a host of other API calls
    searchDiveSpots(zip) {
        this.setState({
            zipCode: zip,
        });
        axios.get("https://maps.googleapis.com/maps/api/geocode/json?address=" + zip + "&key=" + googleAPIKey.googleAPIKey)
            .then((response) => {
                this.setState({
                    latitude: response.data.results[0].geometry.location.lat,
                    longitude: response.data.results[0].geometry.location.lng
                })
                axios.get('https://cors-anywhere.herokuapp.com/http://api.divesites.com/?mode=sites&lat=' + this.state.latitude + '&lng=' + this.state.longitude + '&dist=21.72')
                    .then((res) => {
                        this.setState({
                            diveSpots: res.data.sites,
                        })
                        console.log(this.state.diveSpots)
                    }).catch((err) => console.log(err))
            })
        this.setState({
            showSearchResults: true,
        })
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={Title} />
                    <Route path="/login" component={Login} />
                    <Route path="/search" render={() => <Search
                        searchDiveSpotsProperty={this.searchDiveSpots.bind(this)}
                        searchedSpots={this.state.diveSpots}
                        location={this.state.zipCode}
                        showSearchResults={this.state.showSearchResults} />} />
                </Switch>
            </div>
        )
    }
}

export default Main;