import React from 'react'
import Pdf from '../../src/assets/tm_resume.pdf'
const StayConnected = () => {

  return(
    <div className="stay-connected page">
      <br></br>
      <p>
        Stay Connected!<br></br>
        <ul>
          <li>
            <a href="mailto:tymondragon@gmail.com">Email</a>
          </li>
          <li>
            <a href={Pdf} target="_blank">Resumé</a>
          </li>
          <li>
            <a href="">Email</a>
          </li>
          <li>
            <a href="">Email</a>
          </li>

      • LinkedIn<br></br>
      • Github<br></br>
        </ul>
      </p>
    </div>
  )
}

export default StayConnected