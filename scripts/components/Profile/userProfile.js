import React from 'react';

class UserProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    logOut() {
        this.props.logOutProperty(this.state)
    }

    render() {
        return (
            <div className='container' id='profile'>
                <h1>Welcome Back {this.props.user.userName}!</h1>
                <div className='row'>
                    <div className="col-md-7">
                        <div className='row'>
                            {/* conditional to display pic */}
                            <img src={this.props.user.profileImage} alt="no profile pic selected" className='col-md-4' id='profile-pic' />
                            <div className='col-md-6'>
                                <h3>{this.props.user.firstName} {this.props.user.lastName}</h3>
                                <p>@{this.props.user.userName}</p>
                                <p>Level: {this.props.user.level}</p>
                                <p>Experience: {this.props.user.experience}</p>
                                <p>Location: {this.props.user.location}</p>
                            </div>
                        </div>
                        <hr />
                        <h3>Dive Buddies:</h3>
                        <div className='row'>
                            {this.props.user.diveBuddies.map((diveBuddy, index) => {
                                return (
                                    <div key={index} className='col-md-4'>
                                        <img src={diveBuddy.image} alt="" id='dive-buddy-pic' />
                                        <p>{diveBuddy.buddyUserName}</p>
                                    </div>
                                )
                            })
                            }
                        </div>
                    </div>
                    <div className='col-md-5'>
                        <h3>My Favorite Dive Sites:</h3>
                        <hr />
                        {/* create a conditional if no sites are selected have a prompt */}
                        {this.props.user.personalDiveSites.map((spot, index) => {
                            return (
                                <li key={index}>
                                    <h4>{spot}</h4>
                                </li>
                            )
                        })}
                    </div>
                </div>
                <button className='btn btn-warning' onClick={this.logOut.bind(this)}>LogOut</button>
            </div>
        )
    }
}

export default UserProfile;