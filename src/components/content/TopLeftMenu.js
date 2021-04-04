import React, { Component } from 'react';

class BaseMenu extends Component {
    render() {
        return(
            <div className="top-left-menu">
                {this.props.children}
            </div>
        )
    };
};


export default BaseMenu;