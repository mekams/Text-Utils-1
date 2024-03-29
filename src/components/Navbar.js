import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

export default function Navbar(props) {

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <Link className="navbar-brand" to="/" style={{backgroundColor :"#141414e8" ,color : "#ffc403",border: "3px dashed black",padding:"0px 4px"}}>{props.title}</Link>       {/*title and custon css added */}
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link" aria-current="page" to="/" activeClassName="active" end>Home</NavLink>   {/* Link is used when no highlighting is needed */}
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about" activeClassName="active" end>{props.about}</NavLink>         {/* NavLink is used when highlighting is needed for active links i.e Navbar*/}   
          </li>
        </ul>
        {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-primary" type="submit">Search</button>
        </form> */}
        <div className={`form-check form-switch text-${props.mode === "light"?"dark":"light"}`}>
        <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
    </div>
      </div>
    </div>
  </nav>
  )
}

Navbar.propTypes = {title:PropTypes.string.isRequired,
                    about:PropTypes.string.isRequired,}

Navbar.defaultProps = {title: "Title",
                       about: "About page"}