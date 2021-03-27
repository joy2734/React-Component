import React, { Component } from 'react';

class Seperator extends Component {
    render() {
        return(
            <div style={{clear:"both",height: this.props.height || "5px"}}></div>
        )
    };
};


export default Seperator;