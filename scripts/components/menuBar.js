import React from 'react';

import { Link } from 'react-router-dom';

import logo from '../images/logo.png';

class MenuBar extends React.Component {

    render() {
        return (
            <div className="navbar">
                <div className="float-left">
                    <Link to='/'><img src={ logo } alt="" id='logo'/></Link>
                </div>
                <div className="float-right">
                    <button type="button" className="btn"><Link to="/login">Login</Link></button>
                    <button type="button" className="btn"><Link to="/search">Search</Link></button>
                </div>
            </div >
        )
    }
}

export default MenuBar;