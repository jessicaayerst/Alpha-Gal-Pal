import React, { Component } from 'react'
import './Alpha.css'
import NavBar from "./nav/NavBar"
import ApplicationViews from "./ApplicationViews"

class Alpha extends Component {
    render() {
        return (
	<>
        <NavBar />
        <ApplicationViews />
    </>

        );
    }
}

export default Alpha

