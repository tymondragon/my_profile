import React from 'react'
import './Menu.css'

const Menu = ({scrollTo}) => {
    return (
      <div className="sticky left transparent hello">
        {/* <ul>
          <li> */}
        <div className="menu-container">
            {/* <a onClick={(e) => { scrollTo(e) }} id="hello">Hello</a> */}
          {/* </li> */}
          {/* <li>
            <a onClick={(e)=>{scrollTo(e)}} id="whoami">Who Am I?</a></li>
          <li>
            <a onClick={ (e)=> {scrollTo(e) }} id="skills">Skills</a>
          </li>
          <li>
            <a onClick={(e)=>{scrollTo(e)}} id="recentwork">Recent Work</a>
          </li> */}
          {/* <li> */}
            {/* <a onClick={(e)=>{scrollTo(e)}} id="stayconnected">Stay Connected</a> */}
          {/* </li>
        </ul> */}
        </div>
      </div>
    )
}

export default Menu