import React, { Component } from 'react';
import { Logo, TopLeftMenu } from '../content';

class TopLayout extends Component {
    render() {
        return (
            <div className={this.props.className}>
                {/* 로고 */}
                <Logo></Logo>
                <TopLeftMenu></TopLeftMenu>
                {/* about discover getStarted */}
            </div>
        );
    };
};


export default TopLayout;