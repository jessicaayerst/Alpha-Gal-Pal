import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
import AllergensList from './allergens/AllergensList'
import Callback from './auth/Callback'
import Auth0Client from "./auth/Auth";

class ApplicationViews extends Component {

    render() {
      return (
        <React.Fragment>
          <Route exact path="/home" render={(props) => {
            return <Home />
          }} />
          <Route exact path="/allergens" render={(props) => {
            if (Auth0Client.isAuthenticated()) {
            return <AllergensList {...props} />;}
            else{
              Auth0Client.signIn();
              return null;
            }
          }} />
          <Route exact path="/callback" component={Callback} />
        </React.Fragment>
      )
    }
  }

  export default ApplicationViews