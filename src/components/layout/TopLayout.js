import React, { Component } from 'react';
import { Logo, TopLeftMenu } from '../content';

class TopLayout extends Component {
    render() {
        return (
            <div className={this.props.className}>
                {/* 로고 */}
                <Logo></Logo>
                <div style={{float:"right", "width": "85%", paddingTop: "10px",paddingRight: "50px"}}>
                    <TopLeftMenu>About</TopLeftMenu>
                    <TopLeftMenu>Discover</TopLeftMenu>
                    <TopLeftMenu>Get Starter</TopLeftMenu>
                </div>
                {/* about discover getStarted */}
            </div>
        );
    };
};


export default TopLayout;