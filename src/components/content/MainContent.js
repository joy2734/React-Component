import React, { Component } from 'react';

class MainContent extends Component {
    render() {
        return(
            <div>
                <div style={{textAlign:"center", fontWeight: "bold", fontSize: "16px", padding:"10px"}}>{this.props.title}</div>
                <div style={{width: "80%", marginLeft: "10%",textAlign:"center", fontSize: "10px",color: "gray", padding: "6px"}}>{this.props.children}</div>
                <div className="back-project-btn">Back this project</div>
                <div className="bookmark-btn">Bookmarked</div>
            </div>
        )
    };
};


export default MainContent;
