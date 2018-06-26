import React from 'react';

import img1 from '../../images/Carrosel/img1.jpg';
import img2 from '../../images/Carrosel/img2.jpg';
import img3 from '../../images/Carrosel/img3.jpg';
import img4 from '../../images/Carrosel/img4.jpg';
import img5 from '../../images/Carrosel/img5.jpg';
import img6 from '../../images/Carrosel/img6.jpg';
import img7 from '../../images/Carrosel/img7.jpg';
import img8 from '../../images/Carrosel/img8.jpg';

class ImageCarousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className='row'>
                <img src={img1} className='col-md-3' id='carImage'/>
                <img src={img2} className='col-md-3' id='carImage'/>
                <img src={img3} className='col-md-3' id='carImage'/>
                <img src={img4} className='col-md-3' id='carImage'/>
                <img src={img5} className='col-md-3' id='carImage'/>
                <img src={img6} className='col-md-3' id='carImage'/>
                <img src={img7} className='col-md-3' id='carImage'/>
                <img src={img8} className='col-md-3' id='carImage'/>
            </div>
        )
    }
}

export default ImageCarousel;