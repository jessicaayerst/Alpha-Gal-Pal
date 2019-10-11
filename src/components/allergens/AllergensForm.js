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
    // handleSubmit(evt) {
    //     this.state.symptoms.value ?????????
    //     const symptoms = {
    //         symptoms: []
    //     }
    // }
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
                <form onSubmit={this.handleSubmit}>
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
                            <label htmlFor="notes">Notes about your reaction. Please be thorough, include any restaurant names or brands and what happened:</label>
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="notes"
                                placeholder="Notes about allergic reaction"
                            />
                            <label htmlFor="symptoms">Select the symptoms you had:

              <select multiple={true} value={this.state.symptoms.value} onChange={this.handleFieldChange}>
                <option value="hives">Hives</option>
                <option value="anaphalaxis">Anaphalaxis</option>
                <option value="stomachPain">Stomach Pain/Discomfort</option>
                <option value="breathing">Trouble Breathing</option>
              </select>
            </label>
            <input type="submit" value="Submit" />


                        </div>
                        <div className="alignRight">
                            <button
                                type="button"
                                disabled={this.state.loadingStatus}
                                onClick={this.constructNewAllergen}
                            >Submit</button>
                        </div>
                    </fieldset>
                </form>
            </>

        )
}
}

export default AllergensForm