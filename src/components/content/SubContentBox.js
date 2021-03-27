import _ from "underscore";
import React, { Component, useRef } from 'react';
import ReactDOM from 'react-dom';
import {Seperator} from "../content";

class SubContentBox extends Component {
    constructor(props){
        super(props)
        this.state = {
            leftCount: 0,
            autoHeight: 0 
        }
    }
    componentDidMount(){
        //높이구해서 바꿔주려햇는데....
        // "top-info"
        // "content-info"
        // "reward-info"
        let topEl = (ReactDOM.findDOMNode(this.refs.topArea)).children[0].clientHeight;
        let contentEl = (ReactDOM.findDOMNode(this.refs.contentArea)).clientHeight + 30;
        let rewardEl = (ReactDOM.findDOMNode(this.refs.rewardArea)).children[0].clientHeight;

        let subContentHeight = topEl + contentEl + rewardEl;
        this.setState({autoHeight: subContentHeight})   
    }
    handleClick(){

    }
    render() {
        return(
            <div ref="subContentArea" className="sub-content-box" style={{height:  this.props.height || this.state.autoHeight , fontSize: "8px"}}>
                <div ref="topArea" className="top-info">
                    <div style={{width:"50%",float:"left", fontSize:"14px", fontWeight: "700"}}>{this.props.subTitle}</div>
                    <div style={{width:"20%",float:"right",color: "#6cfbf4"}}>Pledge ${this.props.payment} or more</div>
                </div>
                <Seperator />
                <div ref="contentArea" className="content-info" style={{fontSize:"6px"}}>
                    {this.props.children}
                </div>
                <Seperator />
                <div ref="rewardArea" className="reward-info" >
                    <div style={{width:"30%",float:"left"}}><span style={{fontSize:"14px", fontWeight: "700"}}>{this.state.leftCount}</span>&nbsp;&nbsp; Left</div>
                    <div className="select-reword-btn" onClick={this.handleClick.bind(this)} style={{width:"18%",float:"right", color: "white"}}>Select Reward</div>
                </div>
            </div>
        )
    };
};


export default SubContentBox;