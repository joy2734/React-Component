import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class MainContent extends Component {
    state = { bookMarkStyle : {color:"gray", background: "white"}}
    handleClick(){
        let bookmarkIconEl = (ReactDOM.findDOMNode(this.refs.bookmarkIcon))

        console.log(bookmarkIconEl)
        if(this.state.bookMarkStyle.color == "white"){
            this.setState({bookMarkStyle:{color:"gray", background: "white"}})
            bookmarkIconEl.className ='bookmark-icon'
        }else{
            this.setState({bookMarkStyle:{color:"#157a72", background: "#edffff"}})
            bookmarkIconEl.className ='bookmark-icon selected'
        }
    }
    render() {
        return(
            <div>
                <div style={{textAlign:"center", fontWeight: "bold", fontSize: "16px", padding:"10px"}}>{this.props.title}</div>
                <div style={{width: "80%", marginLeft: "10%",textAlign:"center", fontSize: "10px",color: "gray", padding: "6px"}}>{this.props.children}</div>
                <div className="back-project-btn">Back this project</div>
                <div className="bookmark-btn" style={this.state.bookMarkStyle} >
                    <div ref="bookmarkIcon" className="bookmark-icon" onClick={this.handleClick.bind(this)}></div>
                    <div>Bookmarked</div>
                </div>
            </div>
        )
    };
};


export default MainContent;
