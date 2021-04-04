import React, { Component } from 'react';
import ProgressBar from 'react-percent-bar';
import {BarSeperate, Seperator} from "../content";

const dottformatter = (num) =>{
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

class StatisticsBox extends Component {
    constructor(props){
        super(props)
        this.state = {
            backed: 0,
            backer: 5007,
            daysLeft: 0,
            percent: 0,
        };
    }
//    let leftInfo = this.props.loadLeftInfo()
    componentDidUpdate(prevProps, prevState){
        let leftInfo = this.props.loadLeftInfo()
        if(this.state.backed != leftInfo.backed){
            this.setState({backed: leftInfo.backed, percent: this.updatePercent(leftInfo), daysLeft: leftInfo.daysLeft})   
        }
    }
    updatePercent(leftInfo){
        return (leftInfo.backed/100000)*100;
    }
    render() {
        return(
            <div className="content-box" style={{height: this.props.height || "auto" }}>
                <div className="stat-info" style={{height: "50%", width:"32%", float:"left", textAlign: "center", paddingLeft: "0px"}}>
                    ${dottformatter(this.state.backed)}
                    <div className="stat-etc-info">of $100,000 backed</div>
                </div>
                <BarSeperate />
                <div className="stat-info" style={{height: "50%", width:"32%", float:"left", textAlign: "center"}}>
                    {dottformatter(this.state.backer)}
                    <div className="stat-etc-info">total backers</div>
                </div>
                <div className="stat-info" style={{height: "50%", width:"32%", float:"right", textAlign: "center"}}>
                    {this.state.daysLeft}
                    <div className="stat-etc-info">days left</div>
                </div>
                <BarSeperate float="right"/>
                <Seperator/>
                <ProgressBar width="100%" colorShift={true} fillColor="#157a72" percent={this.state.percent} />
            </div>
        )
    };
};


export default StatisticsBox;