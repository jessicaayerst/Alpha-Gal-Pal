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
    }

    updateExistingUser = evt => {
      evt.preventDefault()
      this.setState({ loadingStatus: true });
      const editedUser = {
        id: this.state.userId,
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

      userManager.update(editedUser)
      .then(() => this.props.history.push("/users"))
    }

    componentDidMount() {
        const id = sessionStorage.getItem("credentials")
      userManager.get(id)
      .then(user => {
          this.setState({
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