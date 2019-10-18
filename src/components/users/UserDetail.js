import React, { Component } from 'react';
import userManager from '../../modules/userManager';
import './User.css'


class UserDetail extends Component {

  state = {
    firstName: "",
    lastName: "",
    zipCode: "",
    email: "",
    dateOfBirth: "",
    optIn: "",
    diagnosisDate: "",
    formalDiagnosis: "",
    prescribedMeds: "",
    tickBite: "",
    loadingStatus: true,
  }


  componentDidMount(){
    // console.log("UserDetail: ComponentDidMount");
    //get(id) from UserManager and hang on to the data; put it into state
    const id = sessionStorage.getItem("credentials")
    console.log("this is session", id)

    userManager.get(id)
    .then((user) => {
      console.log("this is user", user)

      this.setState({
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        zipCode: user.zipCode,
        email: user.email,
        dateOfBirth: user.dateOfBirth,
        optIn: user.optIn,
        diagnosisDate: user.diagnosisDate,
        formalDiagnosis: user.formalDiagnosis,
        prescribedMeds: user.prescribedMeds,
        tickBite: user.tickBite,
        loadingStatus: false
      })
    })

  }



  render() {

    return <div className="card">
        <div className="card-content">
        <button type="button"
        onClick={() => {this.props.history.push(`/users/edit`)}}>Edit Profile Information</button>
        <p>First Name: {this.state.firstName}</p>
            <p>Last Name: {this.state.lastName}</p>
            <p>Zip Code: {this.state.zipCode}</p>
            <p>Email: {this.state.email}</p>
            <p>Date of Birth: {this.state.dateOfBirth}</p>
            <p>Do you give permission for your user data to be used in a research project?
            {this.state.optIn === true ? " Yes" : " No"} </p>
            <p>How long have you had alpha-gal allergy? {this.state.diagnosisDate}</p>
            <p>Have you been formally diagnosed by a physician as being positive for alpha-gal allergy? {this.state.formalDiagnosis  === true ? " Yes" : " No"}</p>
            <p>Are you prescribed any medication for your alpha-gal allergy? (Includes prescription antihistamines or Epi-Pen) {this.state.prescribedMeds  === true ? " Yes" : " No"}</p>
            <p>Were you bitten by a tick around the time you aquired alpha-gal allergy? {this.state.tickBite  === true ? " Yes" : " No"}</p>

        </div>
      </div>
  }
  }


export default UserDetail;
