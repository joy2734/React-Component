import React, { Component } from 'react';

class TopLayout extends Component {
    render() {
        let imagme;
        if(this.props.img)
        imagme = React.createElement('img', {src: this.props.img});
        else
            imagme = React.createElement('div');
        return (
            <div className="top-panel">
                {imagme}
            </div>
        );
    };
};


export default TopLayout;