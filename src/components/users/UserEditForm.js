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
        optIn: "",
        diagnosisDate: "",
        formalDiagnosis: "",
        prescribedMeds: "",
        tickBite: "",
        loadingStatus: true,
    };

    handleFieldChange = evt => {
      const stateToChange = {}
      stateToChange[evt.target.id] = evt.target.value

      this.setState(stateToChange)
    };
    handleCheckBox = evt => {
      const stateToChange = {}
      stateToChange[evt.target.id] = evt.target.checked
      this.setState(stateToChange)
    }
    updateExistingUser = evt => {
      evt.preventDefault();
      this.setState({ loadingStatus: true });
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

      userManager.update(editedUser, sessionStorage.getItem("credentials"))
      .then(() => this.props.history.push("/users"))
    }

    componentDidMount() {
        const id = sessionStorage.getItem("credentials")
      userManager.get(id)
      .then(user => {
          this.setState({
        aud: user.aud,
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
        loadingStatus: false,

          });
      });
    }

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
                value={this.state.optIn}
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
                value={this.state.formalDiagnosis}
              />

              <label htmlFor="prescribedMeds">Check the box if you have been prescribed ANY medications for Alpha-Gal allergy by a medical professional. These would include prescription antihistamines or an EpiPen: </label>
              <input
                type="checkbox"
                required
                className="form-control"
                checked={this.state.prescribedMeds}
                onChange={this.handleCheckBox}
                id="prescribedMeds"
                value={this.state.prescribedMeds}
              />

              <label htmlFor="tickBite">Check the box if you were bitten by a tick around the time you started having Alpha-Gal allergy symptoms: </label>
              <input
                type="checkbox"
                required
                className="form-control"
                checked={this.state.tickBite}
                onChange={this.handleCheckBox}
                id="tickBite"
                value={this.state.tickBite}
              />
            </div>
            <div className="alignRight">
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