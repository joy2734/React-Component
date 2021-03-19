import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import './scss/main.scss';
import { Menu } from 'semantic-ui-react';
import { Bottom, Middle, Top } from './components/layout';

export default class MainLayout extends Component {
  state = { activeItem : false}

  render() {
    const {activeItem} = this.state
    return (<div style={{height:"100%"}}>
        <Top />
        <Middle />
        <Bottom />
      </div>
    )
  }
}

ReactDOM.render(<MainLayout/>, document.getElementById('layout'));