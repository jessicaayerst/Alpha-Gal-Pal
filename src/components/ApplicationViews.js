import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
import AllergensList from './allergens/AllergensList'
import Callback from './auth/Callback'
import Auth0Client from "./auth/Auth";
import AllergensForm from './allergens/AllergensForm'
import UserDetail from './users/UserDetail'
import UserEditForm from './users/UserEditForm'
import SimpleMap from './data/ZipCodeMap2'

class ApplicationViews extends Component {

  render() {

    return (
      <React.Fragment>
        <Route exact path="/home" render={(props) => {
          return Auth0Client.isAuthenticated() ? <Home /> : Auth0Client.signIn()
        }} />
        <Route exact path="/allergens" render={(props) => {
          if (Auth0Client.isAuthenticated()) {
            return <AllergensList {...props} />;
          }
          else {
            Auth0Client.signIn();
            return null;
          }
        }} />
        <Route path="/allergens/new" render={(props) => {
          return Auth0Client.isAuthenticated() ? <AllergensForm {...props} /> : Auth0Client.signIn()
        }} />

        <Route exact path="/users/" render={(props) => {
          return Auth0Client.isAuthenticated() ? <UserDetail {...props} /> : Auth0Client.signIn()
        }} />
        <Route path="/users/edit" render={props => {
          return Auth0Client.isAuthenticated() ? <UserEditForm {...props} /> : Auth0Client.signIn()
        }}
        />
        <Route exact path="/map" render={(props) => {
          return Auth0Client.isAuthenticated() ? <SimpleMap {...props} /> : Auth0Client.signIn()
        }}
        />

        <Route exact path="/callback" component={Callback} />
      </React.Fragment>
    )
  }
}

export default ApplicationViews