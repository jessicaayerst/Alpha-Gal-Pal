import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
import AllergensList from './allergens/AllergensList'
import Callback from './auth/Callback'
import Auth0Client from "./auth/Auth";
import AllergensForm from './allergens/AllergensForm'

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
          <Route path="/allergens/new" render={(props) => {
  return <AllergensForm {...props} />
}} />
          <Route exact path="/callback" component={Callback} />
        </React.Fragment>
      )
    }
  }

  export default ApplicationViews