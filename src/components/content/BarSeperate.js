import React, { Component } from 'react';

class BarSeperate extends Component {
    render() {
        return(
            <div style={{background:"#e8dede", float: this.props.float || "left", width: this.props.width || "1px" ,height: "100%"}}></div>
        )
    };
};


export default BarSeperate;