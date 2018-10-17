import React, { Component } from 'react'
import './App.css'
import Hello from './Hello'
import Skills from './Skills'
import RecentWork from './RecentWork'
import WhoAmI from './WhoAmI'
import StayConnected from './StayConnected'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hello/>
        <WhoAmI/>
        <Skills/>
        <RecentWork/>
        <StayConnected/>
      </div>
    )
  }
}

export default App
