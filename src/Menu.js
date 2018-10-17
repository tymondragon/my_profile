import React, { Component } from 'react'
import './App.css'
// var Scroll = require('react-scroll');
// var Element = Scroll.Element;
// var scroller = Scroll.scroller;

class Menu extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div className="sticky">
        <ul>
          <li>
            <a onClick={(e)=>{this.props.scrollTo(e)}} className="hello">Hello</a>
          </li>
          <li>
            <a onClick={(e)=>{this.props.scrollTo(e)}} className="whoami">Who Am I?</a></li>
          <li>
            <a onClick={ (e)=> {this.props.scrollTo(e) }} className="skills">Skills</a>
          </li>
          <li>
            <a onClick={(e)=>{this.props.scrollTo(e)}} className="recentwork">Recent Work</a>
          </li>
          <li>
            <a onClick={(e)=>{this.props.scrollTo(e)}} className="stayconnected">Stay Connected</a>
          </li>
        </ul>
      </div>
    )
  }
}

export default Menu