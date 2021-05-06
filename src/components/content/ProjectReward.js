import _ from "underscore";
import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Seperator} from "../content";

const ProjectReward = ({
    height,
    projectType,
    paymentText,
    children,
    leftCount
}) => {
    return(
        <div className="sub-content-box" style={{height: height || 'auto', overflow: 'auto', fontSize: "8px", opacity: leftCount > 0 ? 1 : 0.5}}>
            <div className="top-info">
                <div style={{width: "20px",float: "left",height: "19px",border: "2px #157a72 solid",borderRadius: "16px"}}></div>
                <div style={{width:"70%",float:"left", color:"#157a72" , fontSize:"12px", fontWeight: "700", "marginLeft": "10px"}}>{projectType || 'none'}&nbsp;&nbsp;&nbsp;<span>{paymentText}</span></div>
                <div style={{float:"right"}}><span style={{fontSize:"14px", fontWeight: "700"}}>{leftCount}</span>&nbsp;&nbsp; {projectType ? "Left": ""}</div>
            </div>
            <Seperator />
            <div className="content-info" style={{fontSize:"6px", color: "gray"}}>
                {children}
            </div>
            <Seperator />
        </div>
    )
}

export default ProjectReward;