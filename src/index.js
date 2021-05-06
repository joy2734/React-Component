import _ from "underscore";
import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import './scss/main.scss';
import {createStore} from 'redux';
import { Bottom, Middle, Top } from './components/layout';


//let store = createStore()

const MainLayout = () => {
  return (
    <div style={{height:"100%"}}>
        <div className="master-craft-mark"></div>
        <Top className="top-panel"></Top>
        <Middle className="middle-panel" />
        <Bottom className="bottom-panel" />
    </div>
  )
}

ReactDOM.render(<MainLayout/>, document.getElementById('layout'));