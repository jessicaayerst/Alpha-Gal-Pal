import React, { Component } from 'react';
import AllergenManager from '../../modules/allergenManager';
import './AllergensForm.css';
import productTypeManager from '../../modules/productTypeManager';
import allergenTypeManager from '../../modules/allergenTypeManager'

class AllergensForm extends Component {
    // Define what will be included in state. Get UserId from session storage
    state = {
        productName: "",
        date: "",
        notes: "",
        symptoms: "",
        tookMeds: false,
        medIntervention: false,
        userId: parseInt(sessionStorage.getItem("credentials")),
        productTypes: [],
        productTypeId: "",
        allergenTypes: [],
        allergenTypeId: "",
        loadingStatus: false
    };
// Define handleFieldChange function that will put all changes in input fields into state immediately
    handleFieldChange = evt => {

        const stateToChange = {};

        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };
// Define handleCheckBox that puts the checked box into state. Initial state is false, thereby making a "checked" box show up as true in state
    handleCheckBox = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.checked
        this.setState(stateToChange)
      }

    componentDidMount(){
        // Get all productType's from the Db and put the parsed product types into state
        productTypeManager.getAll().then(parsedProductTypes => {
            this.setState({productTypes: parsedProductTypes})
        })
        // GEt all the allergenType's from the DB and put the parsed allergen types into state
        allergenTypeManager.getAll().then(parsedAllergenTypes => {
            this.setState({allergenTypes: parsedAllergenTypes})
        })
    };
// Define constructNewAllergen
    constructNewAllergen = evt => {
// If the input fields for productName or notes is empty when the user clicks the button, an alert will pop up.
        evt.preventDefault();
        if(this.state.productName === "" || this.state.notes === "") {
            window.alert("Please input product name and notes for allergen!")
        }
        // If all the input fields are filled in, then the anwers will be put into state in a new object called "allergen"
        else {

            this.setState({ loadingStatus: true });

            const allergen = {
                productName: this.state.productName,
                date: this.state.date,
                notes: this.state.notes,
                symptoms: this.state.symptoms,
                tookMeds: this.state.tookMeds ,
                medIntervention: this.state.medIntervention,
                userId: this.state.userId,
                // Since productType=1 was saving as an empty string, define a ternary operation where it changes it to the integer 1. Also make all the productTypes save as integers in the database instead of strings, using parseInt
                productTypeId: this.state.productTypeId === "" ? 1 : parseInt(this.state.productTypeId),
                allergenTypeId: this.state.allergenTypeId === "" ? 1 : parseInt(this.state.allergenTypeId)
            };
            // Use AllergenManager.post to save the new allergen to the database then use history.push to direct the user back to the "symptom tracker" page
            AllergenManager.post(allergen)
            .then(() => this.props.history.push("/allergens"));
        }
    };

    render() {
        return (
            <>
            {/* Use input fields to make the form  to save a new allergen */}
                <form>
                    <fieldset>
                        <div className="formgrid">
                            <label htmlFor="productName">Product Name</label>
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                // id must be exactly the same as what is listed in state
                                id="productName"
                                placeholder="Name of product"
                            />
                        </div>
                        </fieldset>

                        <fieldset>
                            <div className="formgrid">
                            <label htmlFor="date">Date of Reaction: </label>
              <input
                type="date"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="date"
                value={this.state.date}
              />
                            </div>
                        </fieldset>

                        <fieldset>
                        <div className="formgrid">
                            <label htmlFor="notes">Notes about your reaction. Please be thorough, include any restaurant names or brands and what happened:</label>
                            {/* Changed to textarea instead of input so that the user can see the entire paragraph if they write more text than one line. The user can more easily edit and view what they have typed by using textarea. */}
                            <textarea
                                style={{width:'325px'}} rows="3"
                                onChange={this.handleFieldChange}
                                id="notes"
                                placeholder="Notes about allergic reaction"
                            ></textarea>
                            </div>
                        </fieldset>

                        <fieldset>
                        <div className="formgrid">
                            <label htmlFor="symptoms">Please list any symptoms you experienced. You can write things like "hives", "anaphalaxis", "stomach pain":</label>
                            <textarea
                                style={{width:'325px'}} rows="3"
                                required
                                onChange={this.handleFieldChange}
                                id="symptoms"
                                placeholder="Symptoms experienced"
                            />
                            </div>
                        </fieldset>

                            <fieldset>
                        <div className="formgrid">
                            <label htmlFor="tookMeds">Check the box if you took ANY medication for this reaction.
                            <input
                                id="tookMeds"
                                type="checkbox"
                                required
                className="form-control"
                                checked={this.state.tookMeds}
                                onChange={this.handleCheckBox}
                                value="false"/>
                            </label>
                            </div>
                        </fieldset>
                            <fieldset>
                        <div className="formgrid">
                            <label htmlFor="medIntervention">Check the box if you had ANY medical intervention for this reaction, such as you went to the ER or doctor.
                            <input
                                id="medIntervention"
                                type="checkbox"
                                required
                className="form-control"
                                checked={this.state.medIntervention}
                                onChange={this.handleCheckBox}
                                value="false"/>
                            </label>
                            </div>
                        </fieldset>

                        <fieldset>
                        <label htmlFor="productTypeId">Select which product type caused your allergic reaction:</label>
                        {/* Use select to make a drop down menu where the user can select productType */}
                            <select
                            id="productTypeId"

                            value={this.state.productTypeId}
                            onChange={this.handleFieldChange}
                            >
                                {/* Map through the productTypes in the database  to get them to show up i the drop down menu, instead of hard coding them in*/}
                                {this.state.productTypes.map(productType => (
                                    <option key={productType.id} value={productType.id}>
                                        {productType.name}
                                    </option>
                                ))}
                            </select>

                        </fieldset>

                        <fieldset>
                        <label htmlFor="allergenTypeId">Select which type of allergen caused your allergic reaction:</label>
                            <select
                            id="allergenTypeId"

                            value={this.state.allergenTypeId}
                            onChange={this.handleFieldChange}
                            >
                                {this.state.allergenTypes.map(allergenType => (
                                    <option key={allergenType.id} value={allergenType.id}>
                                        {allergenType.name}
                                    </option>
                                ))}
                            </select>

                        </fieldset>

                        <fieldset>
                        <div className="formgrid">
                        <div className="alignRight">
                            {/* When the user clicks the submit button, constructNewAllergen is deployed and the new allergen is saved to the database */}
                            <button
                                type="button"
                                disabled={this.state.loadingStatus}
                                onClick={this.constructNewAllergen}
                            >Submit</button>
                        </div>
                        </div>
                    </fieldset>

                </form>
            </>

        )
}
}

export default AllergensForm