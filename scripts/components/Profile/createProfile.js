import React from 'react';

import profilePic from '../../images/ProfilePlaceholder.png';

class CreateProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profileImage: profilePic,
            firstName: '',
            lastName: '',
            userName: '',
            password: '',
            email: '',
            location: '',
            experience: '',
            level: '',
            diveBuddies: [{
                buddyUserName: 'No Dive Buddies Yet',
                image: ''
            }],
            personalDiveSites: ['No Dive Sites Yet']
        }
    }

    clicked() {
        alert('Please provide an image.')
    }

    buildNewProfile() {
        this.props.buildNewProfileProperty(this.state)
    }

    render() {
        return (
            <div className='container' id='profile'>
                <h1>Create a Profile</h1>
                <div className="row">
                    <div className='col-md-4 text-center'>
                        <img src={profilePic} id='blank-profile-pic' />
                        <button className='btn btn-warning' onClick={this.clicked.bind(this)}>Upload Photo +</button>
                        <p>(optional)</p>
                    </div>
                    <div className='col-md-8'>
                        <label>Name: </label>
                        <div className="row">
                            <input
                                type="text"
                                className='form-control col-md-6'
                                placeholder='First'
                                value={this.state.firstName}
                                onChange={(event) => this.setState({ firstName: event.target.value })} />
                            <input
                                type="text"
                                className='form-control col-md-6'
                                placeholder='Last'
                                value={this.state.lastName}
                                onChange={(event) => this.setState({ lastName: event.target.value })} />
                        </div>
                        <label>Username: </label>
                        <input
                            type="text"
                            className='form-control'
                            placeholder='Diver123'
                            value={this.state.userName}
                            onChange={(event) => this.setState({ userName: event.target.value })} />
                        <label>Email: </label>
                        <input
                            type="email"
                            className='form-control'
                            placeholder='diver@anymail.com'
                            value={this.state.email}
                            onChange={(event) => this.setState({ email: event.target.value })} />
                        <label>Password: </label>
                        <input
                            type="password"
                            className='form-control'
                            placeholder='password'
                            value={this.state.password}
                            onChange={(event) => this.setState({ password: event.target.value })} />
                        <label>Location: </label>
                        <input
                            type="text"
                            className='form-control'
                            placeholder='Orange County, CA'
                            value={this.state.location}
                            onChange={(event) => this.setState({ location: event.target.value })} />
                        <label>Experience: </label>
                        <select className='form-control' value={this.state.level} onChange={(event) => this.setState({ level: event.target.value })}>
                            <option value='beginner'>Beginner</option>
                            <option value='open-water'>Open Water</option>
                            <option value='advanced-open-water'>Advanced Open Water</option>
                            <option value='rescue-diver'>Rescue Diver</option>
                            <option value='master-scuba-diver'>Master Scuba Diver</option>
                            <option value='divemaster'>Divemaster</option>
                        </select>
                        <label>Years Diving: </label>
                        <select className='form-control' value={this.state.experience} onChange={(event) => this.setState({ experience: event.target.value })}>
                            <option value='<1'>less then 1 year</option>
                            <option value='1-3'>1 - 3 years</option>
                            <option value='5-10'>5 - 10 years</option>
                            <option value='10-15'>10 - 15 years</option>
                            <option value='15+'>15 + years</option>
                        </select>
                    </div>
                </div>

                <button className="btn btn-warning" onClick={this.buildNewProfile.bind(this)}>Lets get started!</button>

            </div>
        )
    }
}

export default CreateProfile;