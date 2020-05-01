import React, { Component } from 'react'
import './App.css'
import Hello from './Hello/Hello'
import Skills from './Skills'
import RecentWork from './RecentWork'
import WhoAmI from './WhoAmI'
import StayConnected from './StayConnected'
import Menu from './Menu/Menu'
import { Element , Events, animateScroll as scroll, scroller } from 'react-scroll'
class App extends Component {

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
    scroller.scrollTo( e.target.id, {
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
        <div className="wrapper">
          <Menu scrollTo={ this.scrollTo }/>
          <Element  name="hello">
            <Hello/>
          </Element>
          <Element name="whoami">
            <WhoAmI/>
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
