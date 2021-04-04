import _ from "underscore";
import React, { Component, useRef } from 'react';
import ReactDOM from 'react-dom';
import {Seperator, CustomizedDialogs} from "../content";

class SubContentBox extends Component {
    constructor(props){
        super(props)
        this.state = {
            autoHeight: 0,
            open: false,
            leftCount: 0
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
    componentDidUpdate(prevProps, prevState){
        let subContentAreaEl = (ReactDOM.findDOMNode(this.refs.subContentArea));

        if(this.state.leftCount == 0){
            subContentAreaEl.style.opacity = 0.5
        }else{
            subContentAreaEl.style.opacity = 1
        }
    }
    handleClick(){
        this.setState({leftCount: this.state.leftCount+1, open: true});
        this.props.rewardHandleClick(this.props.id ,this.state.leftCount);
    }
    handleClose(){
        this.setState({open: false});
    }
    render() {
        return(
            <div ref="subContentArea" className="sub-content-box" style={{height:  this.props.height || this.state.autoHeight , fontSize: "8px"}}>
                <div ref="topArea" className="top-info">
                    <div style={{width:"50%",float:"left", fontSize:"12px", fontWeight: "700"}}>{this.props.subTitle}</div>
                    <div style={{width:"50%",float:"right",color: "#6cfbf4", textAlign: 'right'}}>Pledge ${this.props.payment} or more</div>
                </div>
                <Seperator />
                <div ref="contentArea" className="content-info" style={{fontSize:"6px", color: "gray"}}>
                    {this.props.children}
                </div>
                <Seperator />
                <div ref="rewardArea" className="reward-info" >
                    <div style={{width:"30%",float:"left"}}><span style={{fontSize:"14px", fontWeight: "700"}}>{this.state.leftCount}</span>&nbsp;&nbsp; Left</div>
                    <div className="select-reword-btn" onClick={this.handleClick.bind(this)} style={{width:"18%",float:"right", color: "white"}}>Select Reward</div>
                </div>
                <CustomizedDialogs open={this.state.open}>
                    <div style={{width: "310px", height: "142px"}}>
                        <div className="confirm-icon"></div>
                        <div style={{fontSize: "15px", fontWeight: "bold", textAlign:"center"}}>Thanks for your support!</div>
                        <div style={{fontSize: "10px", color: "gray", textAlign:"center"}}>
                            Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed.
                        </div>
                        <div className="confirm-btn" onClick={this.handleClose.bind(this)} >got it!</div>
                    </div>
                </CustomizedDialogs>
            </div>
        )
    };
};


export default SubContentBox;