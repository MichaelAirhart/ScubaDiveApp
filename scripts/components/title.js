import React from 'react';

import mainImage from '../images/mainImage2.jpg'
import logo from '../images/logo.png';

class Title extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='text-center'>
                <img src={ mainImage } alt="" id='main-image'/>
                <img src={logo} alt="" id='logo'/>
            </div>
         )
    }
}
 
export default Title;