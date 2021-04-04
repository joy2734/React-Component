import React, { Component } from 'react';
import {BarSeperate} from "../content";

const dottformatter = (num) =>{
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

class StatisticsBox extends Component {
    constructor(props){
        super(props)
        this.state = {
            backed: 89914,
            backer: 5007,
            daysLeft: 56
        };
    }
    render() {
        return(
            <div className="content-box" style={{height: this.props.height || "auto" }}>
                <div className="stat-info" style={{height: "50%", width:"32%", float:"left", textAlign: "center"}}>
                    ${dottformatter(this.state.backed)}
                    <div className="stat-etc-info">of $100,000 backed</div>
                </div>
                <BarSeperate />
                <div className="stat-info" style={{height: "100%", width:"32%", float:"left", textAlign: "center"}}>
                    {dottformatter(this.state.backer)}
                    <div className="stat-etc-info">total backers</div>
                </div>
                <div className="stat-info" style={{height: "100%", width:"32%", float:"right", textAlign: "center"}}>
                    {this.state.daysLeft}
                    <div className="stat-etc-info">days left</div>
                </div>
                <BarSeperate float="right"/>
            </div>
        )
    };
};


export default StatisticsBox;