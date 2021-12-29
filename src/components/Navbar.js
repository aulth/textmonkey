import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
    <a className="navbar-brand" href='#'>{props.title}</a>
    <button style={{border:'none',backgroundColor:'transparent'}} className="navbar-toggler p-0"  type="button" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      {/* <span className="navbar-toggler-icon">h</span> */}
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
        <input type="checkbox" onClick={props.toggleMode} className="form-check-input" id='flexSwitchCheckDefault' />
      </div>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {/* <li className="nav-item"> */}
          {/* <Link className="nav-link" to="">Home</Link> */}
        {/* </li> */}
        {/* <li className="nav-item"> */}
          {/* <Link className="nav-link" to="/about">{props.aboutText}</Link> */}
        {/* </li> */}
      </ul>
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
        <input type="checkbox" onClick={props.toggleMode} className="form-check-input" id='flexSwitchCheckDefault' />
        <label htmlFor="flexSwitchCheckDefault" className="form-check-lable">{props.modeText}</label>
      </div>
    </div>
  </div>
</nav>
    )
}

Navbar.propTypes = {
    title : PropTypes.string.isRequired,
    aboutText : PropTypes.string
}

Navbar.defaultProps = {
    title : "Set Title Here",
    aboutText : "Set About Text Here"
}