import React from 'react'
import Pdf from '../../src/assets/tm_resume.pdf'
import './StayConnected.css'

const StayConnected = () => {
  return(
    <div className="connected-page hello">
    {/* <div className="stay-connected page hello"> */}
      <ul id="navlist">
          <li>
            <a href="mailto:hello@tymondragon.com">Email</a>
          </li>
          <li>
          <a href={Pdf} target="_blank" rel="noopener noreferrer">Resumé</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/tymondragon/">LinkedIn</a>
          </li>
          <li>
            <a href="https://github.com/tymondragon">Github</a>
          </li>
        </ul>
    </div>
  )
}

export default StayConnected