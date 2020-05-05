import React from 'react';
// import skull from '../skull.svg'
import Ty from '../assets/deep_ty.jpg'
import '../App.css'
import './Hello.css'

const Hello = () => {
    return (
      <div className="header page">
        <img src={Ty} className="" alt="logo" />
        {/* <img src={skull} className="App-skull2" alt="logo" /> */}
          <p className="hello">
            Hello,
            I'm Ty Mondragon!
            I like to make web apps
            {/* scroll to find out more about me<br></br> */}
          </p>
      </div>
    )

}

export default Hello