import React, { Component } from 'react';
import { MainContent, ContentBox, SubContentBox, StatisticsBox, Seperator } from '../content';

let text=""
let textContent=""

class MiddleLayout extends Component {
    render() {
        return(
            <div className={this.props.className}>
                <ContentBox height="20%">
                    <MainContent title="Mastercraft Bamboo Monitor Riser">
                        A beautiful & handcrafted monitor stand to reduce neck and eye strain
                    </MainContent>
                </ContentBox>
                <Seperator></Seperator>
                <StatisticsBox height="20%"></StatisticsBox>
                <Seperator></Seperator>
                <ContentBox>
                    <ContentBox height="35%">
                        <div style={{"fontSize":"16px", "fontWeight": "700", "paddingBottom": "10px"}}>
                            About This Project
                        </div>
                        <div style={{"fontSize":"6px", "paddingBottom": "5px"}}>
                            The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates
                            your screen to a more comfortable viewing height. Placing your monitor at eye level has
                            the potential to improve.
                        </div>
                    </ContentBox>
                    <Seperator></Seperator>
                    <SubContentBox subTitle="aa" payment="3">
                        The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates 
                    </SubContentBox>
                    <Seperator></Seperator>
                    <SubContentBox subTitle="aa" payment="5">
                        The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates
                    </SubContentBox>
                    <Seperator></Seperator>
                    <SubContentBox subTitle="aa" payment="10">
                        The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates
                    </SubContentBox>
                </ContentBox>
                <Seperator height="10%"/>
            </div>
        )
    };
};


export default MiddleLayout;