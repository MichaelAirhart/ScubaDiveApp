import React from 'react';

import Popup from 'reactjs-popup';

import GoogleMap from './googleMap';
import { GoogleApiWrapper } from 'google-maps-react';

import DiveSiteDetails from './diveSiteDetails';

import background from '../../images/background.jpg';
import googleAPIKey from '../../../config/apiKey';

var suggestedStyle = {
    backgroundImage: 'url(' + background + ')',
    width: '100%',
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}


class SearchList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showPopup: false
        }
    }

    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        })
    }

    render() {
        return (
            <div>
                <hr />
                <h4>Showing {this.props.searchedSpots.length} sites within 25 miles of: {this.props.location}</h4>

                {/* map function to loop through the provided array after the API call */}
                {this.props.searchedSpots.map((diveSpot, index) => {
                    return (
                        <div className='row' key={index} id='search-list-item' style={suggestedStyle}>
                            <div className="col-md-7">
                                <Popup
                                    trigger={
                                        <div onClick={this.togglePopup.bind(this)}>
                                            <h1>{diveSpot.name}</h1>
                                            <h4>Distance from {this.props.location}: {(diveSpot.distance * 1.15078).toFixed(2)} miles.</h4>
                                        </div>
                                    }
                                    modal
                                    closeOnDocumentClick
                                >
                                    <DiveSiteDetails diveSite={diveSpot} />
                                </Popup>
                            </div>
                            <div className='col-md-5'>
                                {/* component housing google maps created for each dive site */}
                                <GoogleMap google={this.props.google} diveSite={diveSpot} />
                            </div>
                        </div>
                    )
                })
                }
            </div>
        )
    }
}

// for using the google map component the parent component must be wrapped in this GoogleApiWrapper & provided the api key
export default GoogleApiWrapper({
    apiKey: googleAPIKey.googleAPIKeyMap,
})(SearchList);