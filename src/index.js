import _ from "underscore";
import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import './scss/main.scss';
import { Menu } from 'semantic-ui-react';
import { Bottom, Middle, Top } from './components/layout';

console.log(_.map)

export default class MainLayout extends Component {
  state = { activeItem : false}

  render() {
    const {activeItem} = this.state
    return (<div style={{height:"100%"}}>
        <Top className="top-panel"></Top>
        <Middle className="middle-panel" />
        <Bottom className="bottom-panel" />
      </div>
    )
  }
}

ReactDOM.render(<MainLayout/>, document.getElementById('layout'));