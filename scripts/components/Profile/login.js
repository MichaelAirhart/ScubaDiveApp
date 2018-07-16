import React from 'react';

import UserProfile from './userProfile';
import CreateProfile from './createProfile';

import ImageCarousel from './ImgCarousel';

// images 
import myProfilePic from '../../images/mainProfilePic.jpg';
import diveBuddy1 from '../../images/diveBuddy1.jpg';
import diveBuddy2 from '../../images/diveBuddy2.jpg';
import diveBuddy3 from '../../images/diveBuddy3.jpg';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profiles: [{
                profileImage: myProfilePic,
                firstName: 'Michael',
                lastName: 'Airhart',
                userName: 'michaelairhead',
                email: 'me@gmail.com',
                password: 'abc123',
                location: 'Orange County, CA',
                experience: '1-3 years',
                level: 'Open Water',
                diveBuddies: [{
                    buddyUserName: 'DannyDiver',
                    image: diveBuddy1
                }, {
                    buddyUserName: 'ScubaSteve',
                    image: diveBuddy2
                }, {
                    buddyUserName: 'ByeFish-lica',
                    image: diveBuddy3
                }],
                personalDiveSites: ['Shaws Cove', 'The Valient Wreck', 'Casino Point', 'La Jolla Shores'],
            }],
            existingUserName: '',
            ExistingPassword: '',
            showLoginScreen: true,
            goToExistingProfile: false,
            createNewProfile: false
        }
    }

    loginExisting() {
        if (this.state.existingUserName == 'michaelairhead' && this.state.ExistingPassword == 'abc123') {
            this.setState({
                showLoginScreen: false,
                goToExistingProfile: true,
            })
        } else {
            alert('Incorrect user name or password. Please try again.')
        }
    }

    goToNewUser() {
        this.setState({
            showLoginScreen: false,
            createNewProfile: true
        })
    }

    logOut() {
        this.setState({
            showLoginScreen: true,
            goToExistingProfile: false,
            existingUserName: '',
            ExistingPassword: ''
        })
    }

    buildNewProfile(createdProfile) {
        let newProfileArr = [...this.state.profiles];
        newProfileArr.unshift(createdProfile);
        this.setState({
            profiles: newProfileArr,
            showLoginScreen: false,
            goToExistingProfile: true,
            createNewProfile: false
        })
    }

    render() {
        return (
            <div id='login'>
                {this.state.showLoginScreen &&
                    <div className="container">
                        <div>
                            <label htmlFor="existingUserName">User Name or Email:</label>
                            <input
                                type="text"
                                className='form-control'
                                value={this.state.existingUserName}
                                onChange={(event) => this.setState({ existingUserName: event.target.value })} />
                            <label htmlFor="ExistingPassword">Password:</label>
                            <input
                                type="password"
                                className='form-control'
                                value={this.state.ExistingPassword}
                                onChange={(event) => this.setState({ ExistingPassword: event.target.value })} />
                        </div>
                        <div className='text-center'>
                            <button className="btn btn-success" onClick={this.loginExisting.bind(this)}>Login</button>
                            <p> - or - </p>
                            <h4>New User?</h4>
                            <button className='btn btn-success' onClick={this.goToNewUser.bind(this)}>Create a Profile!</button>
                        </div>
                        <ImageCarousel />
                    </div>}
                {this.state.createNewProfile &&
                    <CreateProfile
                        buildNewProfileProperty={this.buildNewProfile.bind(this)} />}
                {this.state.goToExistingProfile &&
                    <UserProfile
                        user={this.state.profiles[0]}
                        logOutProperty={this.logOut.bind(this)} />}
            </div>
        )
    }
}

export default Login;