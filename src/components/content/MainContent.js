import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {CustomizedDialogs, ProjectReward, Seperator, ContentBox} from "../content";

class MainContent extends Component {
    state = { bookMarkStyle : {color:"gray", background: "#e0e0e0"}, bmtext: "Bookmark", open: false}
    handleClick(){
        let bookmarkIconEl = (ReactDOM.findDOMNode(this.refs.bookmarkIcon))

        if(this.state.bookMarkStyle.color == "gray"){
            this.setState({bookMarkStyle:{color:"#157a72", background: "#e0fbfb"}, bmtext: "Bookmarked"})
            bookmarkIconEl.className ='bookmark-icon selected'
        }else{
            this.setState({bookMarkStyle:{color:"gray", background: "#e0e0e0"}, bmtext: "Bookmark"})
            bookmarkIconEl.className ='bookmark-icon'
        }
    }
    projectHandleClick(){
        this.setState({open: true})
    }
    projectHandleClose(){
        this.setState({open: false});
    }
    render() {
        return(
            <div>
                <div style={{textAlign:"center", fontWeight: "bold", fontSize: "16px", padding:"10px"}}>{this.props.title}</div>
                <div style={{width: "80%", marginLeft: "10%",textAlign:"center", fontSize: "10px",color: "gray", padding: "6px"}}>{this.props.children}</div>
                <div className="back-project-btn" onClick={this.projectHandleClick.bind(this)} >Back this project</div>
                <div className="bookmark-btn" style={this.state.bookMarkStyle} >
                    <div ref="bookmarkIcon" className="bookmark-icon" onClick={this.handleClick.bind(this)}></div>
                    <div>{this.state.bmtext}</div>
                </div>
                <CustomizedDialogs open={this.state.open}>
                    
                    <div style={{width: "400px", height: "500px"}}>
                        <div className="close-btn" onClick={this.projectHandleClose.bind(this) } ></div>
                        <div style={{fontWeight: "bold", fontSize: "13PX", float:"left", width: "100%"}}>Back this project</div>
                        <div style={{color: "gray", fontSize: "8px",float:"left", width: "100%"}}>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</div>
                        <Seperator height="10px"/>
                        <ProjectReward projectType="" paymentText="Pledge with no reward">
                            Choose to support us without a reward if you simply believe in our project. As a
                            backer, yout will be signed up to receive product updates via email.
                        </ProjectReward>
                        <Seperator height="10px"/>
                        <ProjectReward projectType="BambooStand" paymentText="Pledge $25 or more">
                            You get an ergonomic stand made of natural bamboo. You've helped us launch
                            our promotional campaign, and you'll be added to a special Backer member list.
                        </ProjectReward>
                        <Seperator height="10px"/>
                        <ProjectReward projectType="Black Edition Stand" paymentText="Pledge $75 or more" >
                            You get a Black Edition computer stand and a personal thank you.
                            You'll be added to our Backer member list. Shipping is included.
                        </ProjectReward>
                        <Seperator height="10px"/>
                        <ProjectReward projectType="Mahogany Special Edition" paymentText="Pledge $200 or more" >
                            You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal
                            thank you. You'll be added to our Backer member list. Shipping is included.
                        </ProjectReward>
                    </div>
                </CustomizedDialogs>
            </div>
        )
    };
};


export default MainContent;
