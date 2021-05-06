import React, { useState } from 'react';
import ProgressBar from 'react-percent-bar';
import {BarSeperate, Seperator} from "../content";
import {dottformatter} from '../../utils';

const StatisticsBox = ({
    height
}) => {
    const [backer, setBacker] = useState(5007);
    const [backed, setBacked] = useState(0);
    const [daysLeft, setDaysLeft] = useState(0);
    const [percent, setPercent] = useState(0);

    return(
        <div className="content-box" style={{height: height || "auto" }}>
            <div className="stat-info" style={{height: "50%", width:"32%", float:"left", textAlign: "center", paddingLeft: "0px"}}>
                ${dottformatter(backed)}
                <div className="stat-etc-info">of $100,000 backed</div>
            </div>
            <BarSeperate />
            <div className="stat-info" style={{height: "50%", width:"32%", float:"left", textAlign: "center"}}>
                {dottformatter(backer)}
                <div className="stat-etc-info">total backers</div>
            </div>
            <div className="stat-info" style={{height: "50%", width:"32%", float:"right", textAlign: "center"}}>
                {daysLeft}
                <div className="stat-etc-info">days left</div>
            </div>
            <BarSeperate float="right"/>
            <Seperator/>
            <ProgressBar width="100%" colorShift={true} fillColor="#157a72" percent={percent} />
        </div>
    )
};

export default StatisticsBox;