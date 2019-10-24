import React, { Component } from 'react';
import userManager from '../../modules/userManager';
import './User.css'


class UserDetail extends Component {
// Define state for UserDetail component
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
// Define the variable "id" by credentials found in session storage.
    const id = sessionStorage.getItem("credentials")
    console.log("this is session", id)
 //Use the ID to get that specific user from the database and put all of that user's profile information into state.
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


// Render the User's Profile information by taking the information about the user out of state and putting it into a card that displays the user's info. Also put a button that the user can click to edit their information.
  render() {

    return <div className="card">
        <div className="card-content">
          {/* When clicked, the button will send the user to the UserEditForm component */}
        <button type="button"
        onClick={() => {this.props.history.push(`/users/edit`)}}>Edit Profile Information</button>
        <p>First Name: {this.state.firstName}</p>
            <p>Last Name: {this.state.lastName}</p>
            <p>Zip Code: {this.state.zipCode}</p>
            <p>Email: {this.state.email}</p>
            <p>Date of Birth: {this.state.dateOfBirth}</p>
            <p>Do you give permission for your user data to be used in a research project?
              {/* If the user has "checked" the box, then the optIn key equals true. I wrote a ternary operation to display "yes" if the property was true and "no" if it was false. I repeated this methodology for several other questions as well(as seen below). */}
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
