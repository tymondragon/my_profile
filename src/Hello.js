import React from 'react';
import skull from './skull.svg'
import './App.css'

const Hello = () => {
    return (
      <div className="header">
          {/* <img src={ skull } className="App-skull" alt="skull" /> */}
          <img src={ skull } className="App-skull2" alt="logo" />
          <p>
            Hello!<br></br>
            I'm Ty Mondragon<br></br>
            scroll to find out more about me<br></br>
          </p>
        {/* <img src={ skull } className="App-skull" alt="skull" /> */}
        <img src={ skull } className="App-skull2" alt="logo" />
      </div>
    )

}

export default Hello