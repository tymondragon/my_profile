import React from 'react';
// import skull from '../skull.svg'
import Ty from '../assets/deep_ty.jpg'
import '../App.css'
import './Hello.css'

const Hello = () => {
  return (
    // <div className="header page">
    <div className="header hello-page">
      <p className="hello">
        My website is <strong>Coming SOON</strong>. Until then, feel free to contact me.</p>

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