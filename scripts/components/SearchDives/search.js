import React from 'react';

import SearchList from './searchList';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            zipCode: ''
        }
    }

    // provided zip code will be passed up to main.js through props 
    searchDiveSpots() {
        this.props.searchDiveSpotsProperty(this.state.zipCode);
        this.setState({
            zipCode: ''
        })
    }

    render() {
        return (
            <div className='container' id='search-container'>
                <div className="search-field text-center" id='search'>
                    <h1>Search for a dive spot</h1>
                    <input
                        type="text"
                        placeholder='search by city or zip code'
                        className='form-control'
                        value={this.state.zipCode}
                        onChange={(event) => this.setState({ zipCode: event.target.value })} />
                    <button className="btn btn-info" onClick={this.searchDiveSpots.bind(this)}>Search</button>
                </div>
                <div>
                    {this.props.showSearchResults &&
                        <SearchList
                            searchedSpots={this.props.searchedSpots}
                            location={this.props.location}
                        />}
                </div>
            </div>
        )
    }
}

export default Search;