import React, { Component } from 'react';

class MainContent extends Component {
    render() {
        return(
            <div>
                {this.props.title}
                {this.props.children}
            </div>
        )
    };
};


export default MainContent;
