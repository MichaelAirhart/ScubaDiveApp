import React from 'react';

import Map, { Marker } from 'google-maps-react';

class GoogleMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                {/* // Map is built in library from google maps react npm  */}
                {this.props.diveSite.lat &&
                    <Map google={this.props.google}
                        style={{ width: '95%', height: '100%', position: 'relative', borderRadius: '15px', border: 'black solid 1px' }}
                        zoom={12}
                        initialCenter={{
                            lat: this.props.diveSite.lat,
                            lng: this.props.diveSite.lng,
                        }}
                        center={{
                            lat: this.props.diveSite.lat,
                            lng: this.props.diveSite.lng,
                        }}
                    >
                        {/* Provides marker of each dive spot, when hovering over it will display the name */}
                        <Marker
                            title={this.props.diveSite.name}
                            position={{ lat: this.props.diveSite.lat, lng: this.props.diveSite.lng }} />
                    </Map>}
            </div>
        )
    }
}

export default GoogleMap;