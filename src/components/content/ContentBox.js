import React, { Component } from 'react';

const ContentBox = ({
    height,
    children
}) => {
    return(
        <div className="content-box" style={{height: height || "auto" }}>
            {children}
        </div>
    )
};

export default ContentBox;