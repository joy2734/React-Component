import React, { Component } from 'react';
import {BarSeperate} from "../content";

class StatisticsBox extends Component {
    render() {
        return(
            <div className="content-box" style={{height: this.props.height || "auto" }}>
                <div style={{height: "100%", width:"32%", float:"left"}}></div>
                <BarSeperate />
                <div style={{height: "100%", width:"32%", float:"left"}}></div>
                <div style={{height: "100%", width:"32%", float:"right"}}></div>
                <BarSeperate float="right"/>
            </div>
        )
    };
};


export default StatisticsBox;