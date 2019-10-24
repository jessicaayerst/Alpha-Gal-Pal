import React, { Component } from "react"
import userManager from "../../modules/userManager"
import "./User.css"

class UserEditForm extends Component {
    //set the initial state
    state = {
        firstName: "",
        lastName: "",
        zipCode: "",
        email: "",
        dateOfBirth: "",
        optIn: false,
        diagnosisDate: "",
        formalDiagnosis: false,
        prescribedMeds: false,
        tickBite: false,
        loadingStatus: true,
    };
// Define what happens when the user types into an input field. All changes are immediately saved in state.
    handleFieldChange = evt => {
      const stateToChange = {}
      stateToChange[evt.target.id] = evt.target.value

      this.setState(stateToChange)
    };
    // When the user checks a checkbox, then it is saved in state.
    handleCheckBox = evt => {
      const stateToChange = {}
      stateToChange[evt.target.id] = evt.target.checked
      this.setState(stateToChange)
    }
    // Define a function that updates the user's profile
    updateExistingUser = evt => {
      evt.preventDefault();
      this.setState({ loadingStatus: true });
      // Define the edited user's information by creating an object named "editedUser".
      const editedUser = {
        aud: this.state.aud,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        zipCode: this.state.zipCode,
        email: this.state.email,
        dateOfBirth: this.state.dateOfBirth,
        optIn: this.state.optIn,
        diagnosisDate: this.state.diagnosisDate,
        formalDiagnosis: this.state.formalDiagnosis,
        prescribedMeds: this.state.prescribedMeds,
        tickBite: this.state.tickBite,
      };
// Call the function userManager.update, using the parameters of the "editedUser" object and the user ID, which is retrieved from session storage. This makes sure that information will only be saved for the user that is currently logged in.
      userManager.update(editedUser, sessionStorage.getItem("credentials"))
      .then(() => this.props.history.push("/users"))
    }

    componentDidMount() {
        const id = sessionStorage.getItem("credentials")
        // GEt the current user's information from the database and put it into state.
      userManager.get(id)
      .then(user => {
          this.setState({
        aud: user.aud,
        firstName: user.firstName,
        lastName: user.lastName,
        zipCode: user.zipCode,
        email: user.email,
        dateOfBirth: user.dateOfBirth,
        // optIn was showing up as undefined if it wasn't checked initially, so I had to put a ternary operation in to say that if it was undefined, to save it as false, and if not, to save it as true. I had to do this for several keys following this as well.
        optIn: user.optIn === undefined ? false : user.optIn,
        diagnosisDate: user.diagnosisDate,
        formalDiagnosis: user.formalDiagnosis === undefined ? false : user.formalDiagnosis,
        prescribedMeds: user.prescribedMeds === undefined ? false : user.prescribedMeds,
        tickBite: user.tickBite === undefined ? false : user.tickBite,
        loadingStatus: false,

          });
      });
    }
// Render a form on the page where the user can update their profile information.
    render() {
      return (
        <>
        <form>
          <fieldset>
            <div className="formgrid">
            <label htmlFor="firstName">First Name: </label>
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                // All ID's in inputs must match what is in state.
                id="firstName"
                value={this.state.firstName}
              />

            <label htmlFor="lastName">Last Name: </label>
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="lastName"
                value={this.state.lastName}
              />

            <label htmlFor="zipCode">Zip Code: </label>
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="zipCode"
                value={this.state.zipCode}
              />

              <label htmlFor="email">Email: </label>
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="email"
                value={this.state.email}
              />

            <label htmlFor="dateOfBirth">Date of Birth: </label>
              <input
                type="date"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="dateOfBirth"
                value={this.state.dateOfBirth}
              />

              <label htmlFor="optIn">Check the box if you agree to give Alpha-Gal Pal access to your data to be used in research project: </label>
              <input
                type="checkbox"
                required
                className="form-control"
                checked={this.state.optIn}
                onChange={this.handleCheckBox}
                id="optIn"
                // Set initial value as "false" so that if the user leaves in unchecked, it will save as "false" instead of "undefined".
                value="false"
              />

              <label htmlFor="diagnosisDate">Enter the date that you started having symptoms of Alpha-Gal allergy: </label>
              <input
                type="date"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="diagnosisDate"
                value={this.state.diagnosisDate}
              />

            <label htmlFor="formalDiagnosis">Check the box if you have been formally diagnosed with Alpha-Gal allergy by a medical professional: </label>
              <input
                type="checkbox"
                required
                className="form-control"
                checked={this.state.formalDiagnosis}
                onChange={this.handleCheckBox}
                id="formalDiagnosis"
                value="false"
              />

              <label htmlFor="prescribedMeds">Check the box if you have been prescribed ANY medications for Alpha-Gal allergy by a medical professional. These would include prescription antihistamines or an EpiPen: </label>
              <input
                type="checkbox"
                required
                className="form-control"
                checked={this.state.prescribedMeds}
                onChange={this.handleCheckBox}
                id="prescribedMeds"
                value="false"
              />

              <label htmlFor="tickBite">Check the box if you were bitten by a tick around the time you started having Alpha-Gal allergy symptoms: </label>
              <input
                type="checkbox"
                required
                className="form-control"
                checked={this.state.tickBite}
                onChange={this.handleCheckBox}
                id="tickBite"
                value="false"
              />
            </div>
            <div className="alignRight">
              {/* When the user clicks the "Save Changes" button, then the updated information will be saved in the database using the updateExistingUser function defined above. */}
              <button
                type="button" disabled={this.state.loadingStatus}
                onClick={this.updateExistingUser}
                className="btn btn-primary"
              >Save Changes</button>
            </div>
          </fieldset>
        </form>
        </>
      );
    }
}

export default UserEditForm