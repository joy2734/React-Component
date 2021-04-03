import React, { Component } from 'react';
import {BarSeperate} from "../content";

class StatisticsBox extends Component {
    constructor(props){
        super(props)
        this.state = {
            backed: 0,
            backer: 0,
            daysLeft: 0
        };
    }
    render() {
        return(
            <div className="content-box" style={{height: this.props.height || "auto" }}>
                <div className="stat-info" style={{height: "50%", width:"32%", float:"left",}}>
                    $ {this.state.backed}
                    <div className="stat-etc-info">of $100,000 backed</div>
                </div>
                {/* state구현 */}
                <BarSeperate />
                <div className="stat-info" style={{height: "100%", width:"32%", float:"left"}}>
                    {this.state.backer}
                    <div className="stat-etc-info">total backers</div>
                </div>
                <div className="stat-info" style={{height: "100%", width:"32%", float:"right"}}>
                    {this.state.daysLeft}
                    <div className="stat-etc-info">days left</div>
                </div>
                <BarSeperate float="right"/>
            </div>
        )
    };
};


export default StatisticsBox;