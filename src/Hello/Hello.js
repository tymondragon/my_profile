import React from 'react';
// import skull from '../skull.svg'
import Ty from '../assets/60892902323__306253FF-6A2D-4FCA-8D70-85C2F9ED6173.jpeg'
import '../App.css'
import './Hello.css'

const Hello = () => {
  return (
    // <div className="header page">
    <div className="header hello-page">
      <p className="hello">
        My website is <strong>Coming Soon</strong>. Until then, feel free to contact me.</p>

      <img src={Ty} className="sticky" alt="logo" />
      {/* <img src={skull} className="App-skull2" alt="logo" /> */}
      <p className="hello">
        Hello,
        I'm Ty Mondragon!
            {/* scroll to find out more about me<br></br> */}
      </p>
    </div>
  )

}

export default Hello