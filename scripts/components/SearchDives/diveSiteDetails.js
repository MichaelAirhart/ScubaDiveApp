import React from 'react';

import axios from 'axios';

import APIKey from '../../../config/apiKey';

class DiveSiteDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            airTemp: '',
            waterTemp: '',
            windSpeed: '',
            conditions: '',
            waveHeight: '',
            chanceOfRain: '',
            swellHeight: '',
            swellPeriod: '',
            heading: ''
        }
    }

    // function will call once the dive location is clicked from the search list 
    componentDidMount() {
        // gathers weather conditions, air temp, wind, general weather conditions
        axios.get('https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/' + APIKey.darkskyAPIKey + '/' + this.props.diveSite.lat + ',' + this.props.diveSite.lng)
            .then((response) => {
                this.setState({
                    airTemp: response.data.currently.temperature,
                    conditions: response.data.currently.summary,
                    windSpeed: response.data.currently.windSpeed,
                    chanceOfRain: (response.data.currently.precipProbability * 100).toFixed(2)
                })
            })
        // gets water information, temp & wave height, etc.  
        axios.get('https://api.stormglass.io/point?lat=' + this.props.diveSite.lat + '&lng=' + this.props.diveSite.lng + '&params=waveHeight,waterTemperature,swellHeight,swellPeriod,currentSpeed,currentDirection', {
            headers: {
                'Authorization': APIKey.stormglassAPIKey,
            }
        }).then((res) => {
            this.setState({
                waterTemp: ((res.data.hours[0].waterTemperature[0].value * (9 / 5)) + 32).toFixed(2),
                waveHeight: (res.data.hours[0].waveHeight[0].value * 3.28).toFixed(2),
                swellHeight: ((res.data.hours[0].swellHeight[0].value) * 3.28).toFixed(2),
                swellPeriod: (res.data.hours[0].swellPeriod[0].value),
                currentSpeed: ((res.data.hours[0].currentSpeed[0].value) * 3.28).toFixed(2),
                currentDirection: (res.data.hours[0].currentDirection[0].value).toFixed(2)
            })
            if (this.state.currentDirection <= 22.50) {
                this.setState({
                    heading: 'North'
                })
            } else if (this.state.currentDirection >= 22.51 && this.state.currentDirection <= 67.50) {
                this.setState({
                    heading: 'North-East'
                })
            } else if (this.state.currentDirection >= 67.51 && this.state.currentDirection <= 112.50) {
                this.setState({
                    heading: 'East'
                })
            } else if (this.state.currentDirection >= 112.51 && this.state.currentDirection <= 157.50) {
                this.setState({
                    heading: 'South-East'
                })
            } else if (this.state.currentDirection >= 157.51 && this.state.currentDirection <= 202.50) {
                this.setState({
                    heading: 'South'
                })
            } else if (this.state.currentDirection >= 202.51 && this.state.currentDirection <= 247.50) {
                this.setState({
                    heading: 'South-West'
                })
            } else if (this.state.currentDirection >= 247.51 && this.state.currentDirection <= 292.50) {
                this.setState({
                    heading: 'West'
                })
            } else if (this.state.currentDirection >= 292.5 && this.state.currentDirection <= 337.50) {
                this.setState({
                    heading: 'North-West'
                })
            } else if (this.state.currentDirection >= 337.51 && this.state.currentDirection <= 360) {
                this.setState({
                    heading: 'North'
                })
            } else {
                console.log('this isnt working')
            }
        })
    }

    render() {
        return (
            <div className='container' id='site-details'>
                <h3>{this.props.diveSite.name}</h3>
                <div className='row'>
                    <p><b>Latitude:</b> {this.props.diveSite.lat}, <b>Longitude:</b> {this.props.diveSite.lng}</p>
                </div>
                <div className='row'>
                    <p><b><u>Current Air Temp:</u></b> {this.state.airTemp} degrees F, <b><u>Water Temp:</u></b> {this.state.waterTemp} degrees F</p>
                </div>
                <div className="row">
                    <p><b><u>Conditions:</u></b> {this.state.conditions} with wind speed of {this.state.windSpeed} miles per hour. Current surf is about {this.state.waveHeight} feet high. Swells at {this.state.swellHeight} feet lasting for {this.state.swellPeriod} seconds.</p>
                </div>
                <div className='row'>
                    <p><b><u>Current:</u></b> {this.state.currentSpeed} feet per second. Direction is {this.state.currentDirection} degress {this.state.heading}.</p>
                </div>
                <div className='row'>
                    <p>Chance of Rain: <b><u>{this.state.chanceOfRain}%</u></b></p>
                </div>
            </div>
        )
    }
}

export default DiveSiteDetails;