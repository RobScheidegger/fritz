import React, { useState } from 'react'
import './App.css';
import Navigation from './components/nagivation'

export default class App extends React.Component {

  constructor(){
    super();
  }

  render(){
    return (
      <Navigation />
    );
  }
}