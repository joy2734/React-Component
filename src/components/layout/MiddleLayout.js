import React, { Component } from 'react';
import { ContentBox, SubContentBox, StatisticsBox, Seperator } from '../content';

let text=""
let textContent=""

class MiddleLayout extends Component {
    render() {
        return(
            <div className={this.props.className}>
                <ContentBox height="20%">
                    <div>1212121212</div>
                </ContentBox>
                <Seperator></Seperator>
                <StatisticsBox height="20%"></StatisticsBox>
                <Seperator></Seperator>
                <div className="content-box" style={{height:"70%"}}>
                    <ContentBox height="35%">
                        <div style={{"fontSize":"10px", "fontWeight": "700", "paddingBottom": "10px"}}>
                            About This Project
                        </div>
                        <div style={{"fontSize":"6px", "paddingBottom": "5px"}}>
                            The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates
                            your screen to a more comfortable viewing height. Placing your monitor at eye level has
                            the potential to improve.
                        </div>
                    </ContentBox>
                    <Seperator></Seperator>
                    <SubContentBox subTitle="aa" payment="3" height="20%">
                        The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates
                    </SubContentBox>
                    <Seperator></Seperator>
                    <SubContentBox subTitle="aa" payment="5" height="20%">
                        The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates
                    </SubContentBox>
                    <Seperator></Seperator>
                    <SubContentBox subTitle="aa" payment="10" height="20%">
                        The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates
                    </SubContentBox>
                </div>
            </div>
        )
    };
};


export default MiddleLayout;