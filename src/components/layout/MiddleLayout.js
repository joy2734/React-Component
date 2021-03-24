import React, { Component } from 'react';
import { ContentBox, SubContentBox, StatisticsBox, Seperator } from '../content';

let text=""
let textContent=""

class MiddleLayout extends Component {
    render() {
        return(
            <div className={this.props.className}>
                <ContentBox height="20%"></ContentBox>
                <Seperator></Seperator>
                <StatisticsBox height="20%"></StatisticsBox>
                <Seperator></Seperator>
                <div className="content-box" style={{height:"60%"}}>
                    {/* 테스트적기 */}
                    <SubContentBox height="25%"></SubContentBox>
                    <Seperator></Seperator>
                    <SubContentBox height="25%"></SubContentBox>
                    <Seperator></Seperator>
                    <SubContentBox height="25%"></SubContentBox>
                </div>
            </div>
        )
    };
};


export default MiddleLayout;