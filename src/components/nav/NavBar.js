import React, { Component } from 'react';
import { Link } from "react-router-dom"
import './NavBar.css'

class NavBar extends Component {

  render(){

    return (
      <header>
        <h1 className="site-title">Alpha-Gal Pal<br />
          <small>An app that focuses on awareness, support, and research of those living with Alpha-Gal Allergy.</small>
        </h1>
        <nav>
          <ul className="container">
            <li><Link className="nav-link" to="/home">Home</Link></li>
            <li><Link className="nav-link" to="/userProfile">User Profile</Link></li>
            <li><Link className="nav-link" to="/allergens">Allergens</Link></li>
            <li><Link className="nav-link" to="/data">Data</Link></li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default NavBar;