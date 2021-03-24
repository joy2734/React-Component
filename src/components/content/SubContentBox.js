import React, { Component } from 'react';

class SubContentBox extends Component {
    render() {
        return(
            <div class="sub-content-box" style={{height: this.props.height || "100%" }}>
                
            </div>
        )
    };
};


export default SubContentBox;