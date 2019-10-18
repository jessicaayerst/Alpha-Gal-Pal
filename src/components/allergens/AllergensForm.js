import React, { Component } from 'react';
import AllergenManager from '../../modules/allergenManager';
import './AllergensForm.css';
import productTypeManager from '../../modules/productTypeManager';
import allergenTypeManager from '../../modules/allergenTypeManager'

class AllergensForm extends Component {
    state = {
        productName: "",
        notes: "",
        symptoms: "",
        tookMeds: false,
        medIntervention: false,
        userId: "",
        productTypes: [],
        productTypeId: "",
        allergenTypes: [],
        allergenTypeId: "",
        loadingStatus: false
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    handleCheckBox = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.checked
        this.setState(stateToChange)
      }

    componentDidMount(){
        // Get all productType's from the Db
        productTypeManager.getAll().then(parsedProductTypes => {
            this.setState({productTypes: parsedProductTypes})
        })
        allergenTypeManager.getAll().then(parsedAllergenTypes => {
            this.setState({allergenTypes: parsedAllergenTypes})
        })
    };

    constructNewAllergen = evt => {
        evt.preventDefault();
        if(this.state.productName === "" || this.state.notes === "") {
            window.alert("Please input product name and notes for allergen!")
        } else {

            this.setState({ loadingStatus: true });

            const allergen = {
                productName: this.state.productName,
                notes: this.state.notes,
                symptoms: this.state.symptoms,
                tookMeds: this.state.tookMeds ,
                medIntervention: this.state.medIntervention,
                userId: 1,
                productTypeId: this.state.productTypeId,
                allergenTypeId: this.state.allergenTypeId
            };
            AllergenManager.post(allergen)
            .then(() => this.props.history.push("/allergens"));
        }
    };

    render() {
        return (
            <>
                <form>
                    <fieldset>
                        <div className="formgrid">
                            <label htmlFor="productName">Product Name</label>
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="productName"
                                placeholder="Name of product"
                            />
                        </div>
                        </fieldset>

                        <fieldset>
                        <div className="formgrid">
                            <label htmlFor="notes">Notes about your reaction. Please be thorough, include any restaurant names or brands and what happened:</label>
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="notes"
                                placeholder="Notes about allergic reaction"
                            />
                            </div>
                        </fieldset>

                        <fieldset>
                        <div className="formgrid">
                            <label htmlFor="symptoms">Please list any symptoms you experienced. You can write things like "hives", "anaphalaxis", "stomach pain":</label>
                            <input
                                type="text"
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
                            <select
                            id="productTypeId"
                            value={this.state.productTypeId}
                            onChange={this.handleFieldChange}
                            >
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