import React, { Component } from 'react';

const Seperator = ({
    height
}) => {
    return(
        <div style={{clear:"both",height: height || "5px"}}></div>
    )
}

export default Seperator;