import React, { Component } from 'react';

class ContentBox extends Component {
    render() {
        return(
            <div className="content-box" style={{height: this.props.height || "auto" }}>
                {this.props.children}
            </div>
        )
    };
};


export default ContentBox;