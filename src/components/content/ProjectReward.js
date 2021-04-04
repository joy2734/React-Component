import _ from "underscore";
import React, { Component, useRef } from 'react';
import ReactDOM from 'react-dom';
import {Seperator, CustomizedDialogs} from "../content";
import { green } from "@material-ui/core/colors";

class ProjectReward extends Component {
    constructor(props){
        super(props)
        this.state = {
            leftCount: 0,
            autoHeight: 0,
            open: false
        }
    }
    componentDidMount(){
        //높이구해서 바꿔주려햇는데....
        // "top-info"
        // "content-info"
        // "reward-info"
        let topEl = (ReactDOM.findDOMNode(this.refs.topArea)).children[0].clientHeight;
        let contentEl = (ReactDOM.findDOMNode(this.refs.contentArea)).clientHeight + 30;

        let subContentHeight = topEl + contentEl;
        this.setState({autoHeight: subContentHeight})
    }
    componentDidUpdate(prevProps, prevState){
        let subContentAreaEl = (ReactDOM.findDOMNode(this.refs.subContentArea));

        if(this.state.leftCount == 0){
            subContentAreaEl.style.opacity = 0.5
        }else{
            subContentAreaEl.style.opacity = 1
        }
    }
    projectHandleClick(){
        let subContentAreaEl = (ReactDOM.findDOMNode(this.refs.subContentArea));
        subContentAreaEl.style.opacity = subContentAreaEl.style.opacity == 1 ? 0.5 : 1;
    }
    render() {
        return(
            <div ref="subContentArea" className="sub-content-box" onClick={this.projectHandleClick.bind(this)} style={{height:  this.props.height || this.state.autoHeight , fontSize: "8px"}}>
                <div ref="topArea" className="top-info">
                    <div style={{width: "20px",float: "left",height: "19px",border: "2px #157a72 solid",borderRadius: "16px"}}></div>
                    <div style={{width:"50%",float:"left", color:"#157a72" , fontSize:"12px", fontWeight: "700", "marginLeft": "10px"}}>{this.props.projectType || 'none'}<span>{this.props.paymentText}</span></div>
                    <div style={{float:"right"}}><span style={{fontSize:"14px", fontWeight: "700"}}>{this.state.leftCount}</span>&nbsp;&nbsp; Left</div>
                </div>
                <Seperator />
                <div ref="contentArea" className="content-info" style={{fontSize:"6px", color: "gray"}}>
                    {this.props.children}
                </div>
                <Seperator />
            </div>
        )
    };
};


export default ProjectReward;