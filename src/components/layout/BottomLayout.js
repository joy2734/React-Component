import React, { Component } from 'react';

const BottomLayout = ({
    className,
    children
}) => {
    return(
        <div className={className} >
            {children}
        </div>
    )
};


export default BottomLayout;