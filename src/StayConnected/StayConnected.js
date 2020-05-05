import React from 'react'
import Pdf from '../../src/assets/tm_resume.pdf'
const StayConnected = () => {
  return(
    <div className="stay-connected page">
      <br></br>
      <p>
        Stay Connected!
      </p>
      <ul>
          <li>
            <a href="mailto:tymondragon@gmail.com">Email</a>
          </li>
          <li>
            <a href={Pdf} target="_blank">Resumé</a>
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