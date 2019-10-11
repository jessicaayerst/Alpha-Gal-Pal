import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom"
import './NavBar.css'
import auth0Client from "../auth/Auth";

class NavBar extends Component {
  signOut = () => {
    auth0Client.signOut();
    sessionStorage.clear()
    this.props.history.replace("/");
  };

  render(){

    return (
      <header>
        <h1 className="site-title">Alpha-Gal Pal<br />
          <small>An app that focuses on awareness, support, and research of those living with Alpha-Gal Allergy.</small>
        </h1>
        <nav>
          <ul className="container">

            {!auth0Client.isAuthenticated() ? (
              <button className="btn btn-success" onClick={auth0Client.signIn}>Sign In</button>
        ) : (
          <React.Fragment>
             <label>
                {auth0Client.getProfile().name}
              </label>
              <button
                className="btn btn-danger"
                onClick={this.signOut}
              >
                Sign Out
              </button>
              <li><Link className="nav-link" to="/home">Home</Link></li>
            <li><Link className="nav-link" to="/userProfile">User Profile</Link></li>
            <li><Link className="nav-link" to="/allergens">Allergens</Link></li>
            <li><Link className="nav-link" to="/data">Data</Link></li>
            </React.Fragment>
        )}
          </ul>
        </nav>
      </header>
    )
  }
}

export default withRouter(NavBar);