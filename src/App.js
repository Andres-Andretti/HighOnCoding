import React, { Component } from 'react'
// import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu'
import MainHeadline from './components/MainHeadline'
import Article from './components/Article'



class App extends Component {

  render() {
    

    return (
      <div>
        <Menu />
        <MainHeadline header= 'Curse of the Current Reviews' content= '~~~~~Article content~~~~~' />
        <Article title="Hello Watchkit" body="~~~~~Article content~~~~~" comments="12" likes="124"/>

        <Article title="Introduction to Swift" body="~~~~~Article content~~~~~" comments="15" likes="45"/>
      </div>
    )
  }
}





export default App;
