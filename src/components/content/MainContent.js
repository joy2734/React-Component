import React, { useState } from 'react';
import {useDispatch, useSelector} from "react-redux";
import {openDialogAction, toggleBookmarkAction} from "../../store/actions/CroudCountAction";
import _ from "underscore";
import {CustomizedDialogs, ProjectReward, Seperator, ContentBox} from "../content";

const MainContent = ({
    title,
    children,
    bambooStdCount,
    blackEdStdCount,
    mahoganySpcEdCount
}) => {
    const [open, setOpen] = useState(false);
    const [useBookmark, setUseBookmark] = useState(false);  

    return(
        <div>
            <div style={{textAlign:"center", fontWeight: "bold", fontSize: "16px", padding:"10px"}}>{title}</div>
            <div style={{width: "80%", marginLeft: "10%",textAlign:"center", fontSize: "10px",color: "gray", padding: "6px"}}>{children}</div>
            <div className="back-project-btn" onClick={()=> setOpen(!open)}>Back this project</div>
            <div className="bookmark-btn" style={useBookmark ? {color:"#157a72", background: "#e0fbfb"}: {color:"gray", background: '#e0e0e0'}} >
                <div className={useBookmark ? 'bookmark-icon selected' : 'bookmark-icon' } onClick={()=> setUseBookmark(!useBookmark)}></div>
                <div>{useBookmark ? 'Bookmarked': 'Bookmark'}</div>
            </div>
            <CustomizedDialogs open={open}>
                <div style={{width: "400px", height: "500px"}}>
                    <div className="close-btn" onClick={()=> setOpen(!open)}></div>
                    <div style={{fontWeight: "bold", fontSize: "13PX", float:"left", width: "100%"}}>Back this project</div>
                    <div style={{color: "gray", fontSize: "8px",float:"left", width: "100%"}}>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</div>
                    <Seperator height="10px"/>
                    <ProjectReward projectType="" paymentText="Pledge with no reward">
                        Choose to support us without a reward if you simply believe in our project. As a
                        backer, yout will be signed up to receive product updates via email.
                    </ProjectReward>
                    <Seperator height="10px"/>
                    <ProjectReward projectType="BambooStand" paymentText="Pledge $25 or more" leftCount={bambooStdCount} >
                        You get an ergonomic stand made of natural bamboo. You've helped us launch
                        our promotional campaign, and you'll be added to a special Backer member list.
                    </ProjectReward>
                    <Seperator height="10px"/>
                    <ProjectReward projectType="Black Edition Stand" paymentText="Pledge $75 or more" leftCount={blackEdStdCount} >
                        You get a Black Edition computer stand and a personal thank you.
                        You'll be added to our Backer member list. Shipping is included.
                    </ProjectReward>
                    <Seperator height="10px"/>
                    <ProjectReward projectType="Mahogany Special Edition" paymentText="Pledge $200 or more" leftCount={mahoganySpcEdCount}  >
                        You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal
                        thank you. You'll be added to our Backer member list. Shipping is included.
                    </ProjectReward>
                </div>
            </CustomizedDialogs>
        </div>
    )
}


export default MainContent;
