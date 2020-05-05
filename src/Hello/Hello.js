import React from 'react';
import skull from '../skull.svg'
import '../App.css'
import './Hello.css'

const Hello = () => {
    return (
      <div className="header page">
        <img src={skull} className="App-skull2" alt="logo" />
          <p className="hello">
            Hello!<br></br>
            I'm Ty Mondragon<br></br>
            {/* scroll to find out more about me<br></br> */}
          </p>
      </div>
    )

}

export default Hello