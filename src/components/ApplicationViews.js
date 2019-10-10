import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
import AllergensCard from './allergens/AllergensCard'

class ApplicationViews extends Component {

    render() {
      return (
        <React.Fragment>
          <Route exact path="/home" render={(props) => {
            return <Home />
          }} />
          <Route path="/animals" render={(props) => {
            return <AllergensCard />
          }} />
        </React.Fragment>
      )
    }
  }

  export default ApplicationViews