import React, { Component } from 'react'
import './App.css'
// import Hello from './Hello'
import Skills from './Skills'
import RecentWork from './RecentWork'
import WhoAmI from './WhoAmI'
import StayConnected from './StayConnected'
import skull from './skull.svg'
import './App.css'
// import * as Scroll from 'react-scroll';
import { Element , Events, animateScroll as scroll, scroller } from 'react-scroll'
class App extends Component {
  // constructor (props){
  //     super(props);
  //     this.scrollToTop = this.scrollToTop.bind(this);
  // }

  componentDidMount() {

    Events.scrollEvent.register('begin', function() {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function() {
      console.log("end", arguments);
    });

  }
  scrollToTop = () => {
    scroll.scrollToTop();
  }
  scrollTo = (e) => {
    scroller.scrollTo( e.target.className, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }

  scrollToWithContainer() {

    let goToContainer = new Promise((resolve, reject) => {

      Events.scrollEvent.register('end', () => {
        resolve();
        Events.scrollEvent.remove('end');
      });

      scroller.scrollTo('scroll-container', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart'
      });

    });

    goToContainer.then(() =>
        scroller.scrollTo('scroll-container-second-element', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
            containerId: 'scroll-container'
        }));
  }
  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }
  render() {
    return (
      <div className="App">
          <div className="header">
            <img src={ skull } className="App-skull2" alt="logo" />
            <p>
              Hello!<br></br>
              I'm Ty Mondragon<br></br>
              scroll to find out more about me<br></br>
            </p>
            <img src={ skull } className="App-skull2" alt="logo" />
          </div>
          <ul className="sticky">
            <li>
              <a onClick={(e)=>{this.scrollToTop()}} className="hello">Hello</a>
            </li>
            <li>
              <a onClick={(e)=>{this.scrollTo(e)}} className="whoami">Who Am I?</a></li>
            <li>
              <a onClick={ (e)=> {this.scrollTo(e) }} className="skills">Skills</a>
            </li>
            <li>
              <a onClick={(e)=>{this.scrollTo(e)}} className="recentwork">Recent Work</a>
            </li>
            <li>
              <a onClick={(e)=>{this.scrollTo(e)}} className="stayconnected">Stay Connected</a>
            </li>
          </ul>
        <Element name="whoami">
          <WhoAmI scrollTo={ this.scrollTo }/>
        </Element>
        <Element name="skills">
          <Skills/>
        </Element>
        <Element name="recentwork">
          <RecentWork/>
        </Element>
        <Element name="stayconnected">
          <StayConnected/>
        </Element>
      </div>
    )
  }
}

export default App
