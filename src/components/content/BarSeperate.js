import React, { Component } from 'react';

const BarSeperate = ({
    float,
    width
}) =>{
    return(
        <div style={{background:"#e8dede", float: float || "left", width: width || "1px" ,height: "80%"}}></div>
    )
}

export default BarSeperate;