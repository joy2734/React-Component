import React, { Component } from 'react';
import { MainContent, ContentBox, SubContentBox, StatisticsBox, Seperator} from '../content';

class MiddleLayout extends Component {
    render() {
        return(
            <div className={this.props.className}>
                <ContentBox height="20%">
                    <MainContent title="Mastercraft Bamboo Monitor Riser">
                        A beautiful & handcrafted monitor stand to reduce neck and eye strain.
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
                        <div style={{"fontSize":"6px", "paddingBottom": "5px", color: "gray"}}>
                            The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates
                            your screen to a more comfortable viewing height. Placing your monitor at eye level has
                            the potential to improve your posture and make you more comfortable while at work,
                            helping you stay focused on the task at hand.
                            <br/>
                            Featureing artisan craftsmanship, the simplicity of design creates extra desk space below
                            your computer to allow notepads, pens, and USB sticks to be stored under the stand.
                        </div>
                    </ContentBox>
                    <Seperator></Seperator>
                    <SubContentBox subTitle="Bamboo Stand" payment="25">
                        You get an ergonomic stand made of natural bamboo. You've helped us launch
                        our promotional campaign, and you'll be added to a special Backer member list.
                    </SubContentBox>
                    <Seperator></Seperator>
                    <SubContentBox subTitle="Black Edition Stand" payment="75">
                        You get a Black Special Edition computer stand and personal thank you. You'll
                        be added to our Backer member list. Shipping is included.
                    </SubContentBox>
                    <Seperator></Seperator>
                    <SubContentBox subTitle="Mahogany Special Edition" payment="200">
                        You get two Special Edition Mahogany stands. a Backer T-Shirt, and a personal
                        thank you. You'll be added to our Backer member list. Shipping is included.
                    </SubContentBox>
                </ContentBox>
                <Seperator height="10%"/>
            </div>
        )
    };
};


export default MiddleLayout;