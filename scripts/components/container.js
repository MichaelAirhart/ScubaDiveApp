import React from 'react';

import Main from './main';
import MenuBar from './menuBar';

class Container extends React.Component {

    render() {
        return (
            <div>
                <MenuBar />
                <Main />
            </div>

        )
    }
}

export default Container;
