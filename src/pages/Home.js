import React, { Component } from 'react';

class Home extends Component {
    constructor(props){
        super(props)
        this.launchClock()
        this.state = {currentTime: (new Date()).toLocaleString('en')}
    }
    launchClock(){
        setInterval(()=>{
            console.log('Updating time...')
            this.setState({
                currentTime: (new Date()).toLocaleString('en')
            })
        }, 1000)
    }
    render() {      
        return (
            <div>
                This page is Home<br/>
                {this.state.currentTime}
            </div>
        );
    };
};


export default Home;