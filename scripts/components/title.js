import React from 'react';

import mainImage from '../images/mainImage2.jpg'
import logo from '../images/logo.png';


class Title extends React.Component {

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