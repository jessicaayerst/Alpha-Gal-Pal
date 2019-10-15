import React, { Component } from 'react';
import AllergenManager from '../../modules/allergenManager';
import './AllergensForm.css';

class AllergensForm extends Component {
    state = {
        productName: "",
        notes: "",
        symptoms: "",
        tookMeds: "",
        medIntervention: "",
        userId: "",
        productTypeId: "",
        allergenTypeId: "",
        loadingStatus: false
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
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
                tookMeds: this.state.tookMeds,
                medIntervention: this.state.medIntervention,
                userId: 1,
                productTypeId: 1,
                allergenTypeId: 1
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
                                checked={this.state.tookMeds}
                                onChange={this.handleFieldChange} />
                            </label>
                            </div>
                        </fieldset>
                            <fieldset>
                        <div className="formgrid">
                            <label htmlFor="medIntervention">Check the box if you had ANY medical intervention for this reaction, such as you went to the ER or doctor.
                            <input
                                id="medIntervention"
                                type="checkbox"
                                checked={this.state.medIntervention}
                                onChange={this.handleFieldChange} />
                            </label>
                            </div>
                        </fieldset>

                        <fieldset>
                            <label htmlFor="productTypeId">Select the type of product that caused your allergic reaction. You can be more specific about the product in the "Notes" section above:
                            <select id="productTypeId">
                                <option value={this.state.productTypeId}>Food</option>
                                <option value={this.state.productTypeId}>Supplement(i.e. vitamins, herbs, protein powder)</option>
                                <option value={this.state.productTypeId}>Medicine(OTC or prescribed)</option>
                                <option value={this.state.productTypeId}>Environmental( i.e. lotion, laundry detergent, fumes)</option>
                                <option value={this.state.productTypeId}>Other</option>
                                <option value={this.state.productTypeId}>Unknown</option>
                            </select>
                            </label>
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