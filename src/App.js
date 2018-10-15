import React, { Component } from 'react'
import './App.css'
import Hello from './Hello'
import Skills from './Skills'
import WhoAmI from './WhoAmI'
import WhereICameFrom from './WhereICameFrom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hello/>
        <WhoAmI/>
        <WhereICameFrom/>
        <Skills/>
      </div>
    )
  }
}

export default App
