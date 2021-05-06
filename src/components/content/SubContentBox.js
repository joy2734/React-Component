import _ from "underscore";
import React, { useState, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Seperator, CustomizedDialogs} from "../content";
import {openDialogAction, bambooAddCountAction, blackStdAddCountAction, mahoganyAddCountAction} from '../../store/actions/CroudCountAction';

const SubContentBox = ({
    id,
    height,
    subTitle,
    payment,
    children,
    leftCount,
    open
}) => {
    const dispatch = useDispatch();
    const subContentMap = {
        'bs'  : bambooAddCountAction,
        'bes' : blackStdAddCountAction,
        'mse' : mahoganyAddCountAction
    };
    const _onSelectReward = () =>{
        dispatch(subContentMap[id](leftCount))
        dispatch(openDialogAction(open))
    }

    return(
        <div className="sub-content-box" style={{height: height || 'auto', overflow: 'auto', fontSize: "8px", opacity: leftCount > 0 ? 1 : 0.5}}>
            <div className="top-info">
                <div style={{width:"50%",float:"left", fontSize:"12px", fontWeight: "700"}}>{subTitle}</div>
                <div style={{width:"50%",float:"right",color: "#6cfbf4", textAlign: 'right'}}>Pledge ${payment} or more</div>
            </div>
            <Seperator />
            <div className="content-info" style={{fontSize:"6px", color: "gray"}}>
                {children}
            </div>
            <Seperator />
            <div className="reward-info" >
                <div style={{width:"30%",float:"left"}}><span style={{fontSize:"14px", fontWeight: "700"}}>{leftCount}</span>&nbsp;&nbsp; Left</div>
                <div className="select-reword-btn" onClick={()=> _onSelectReward()} style={{width:"18%",float:"right", color: "white"}}>Select Reward</div>
            </div>
            <CustomizedDialogs open={open}>
                <div style={{width: "310px", height: "142px"}}>
                    <div className="confirm-icon"></div>
                    <div style={{fontSize: "15px", fontWeight: "bold", textAlign:"center"}}>Thanks for your support!</div>
                    <div style={{fontSize: "10px", color: "gray", textAlign:"center"}}>
                        Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed.
                    </div>
                    <div className="confirm-btn" onClick={()=> dispatch(openDialogAction(open))}>got it!</div>
                </div>
            </CustomizedDialogs>
        </div>
    )
}


export default SubContentBox;