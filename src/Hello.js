import React from 'react';
import skull from './skull.svg'
import './App.css'
const Hello = () => {
    return (
      <div className="header">
          <img src={ skull } className="App-skull" alt="skull" />
          <img src={ skull } className="App-skull2" alt="logo" />
          <p>
            I like to eat pudding.
          </p>
        <img src={ skull } className="App-skull" alt="skull" />
        <img src={ skull } className="App-skull2" alt="logo" />
      </div>
    )

}

export default Hello