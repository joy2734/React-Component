import React, { Component } from 'react';
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
    }
    handleClick(){

    }
    render() {
        return(
            <div className="sub-content-box" style={{height:  this.props.height || this.state.autoHeight , fontSize: "8px"}}>
                <div className="top-info">
                    <div style={{width:"50%",float:"left"}}>{this.props.subTitle}</div>
                    <div style={{width:"23%",float:"right"}}>Pledge {this.props.payment} or more</div>
                </div>
                <Seperator />
                <div className="content-info" style={{fontSize:"6px"}}>
                    {this.props.children}
                </div>
                <Seperator />
                <div className="reward-info">
                    <div style={{width:"30%",float:"left"}}>Left {this.state.leftCount}</div>
                    <div className="select-reword-btn" onClick={this.handleClick.bind(this)} style={{width:"30%",float:"right"}}></div>
                </div>
            </div>
        )
    };
};


export default SubContentBox;