import React, { Component } from 'react';

const BaseMenu = ({
    children
}) => {
    return(
        <div className="top-left-menu">
            {children}
        </div>
    )
}

export default BaseMenu;