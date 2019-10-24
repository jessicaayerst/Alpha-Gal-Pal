import React, { Component } from 'react';
import './Allergens.css'

class AllergensCard extends Component {
    // Create a card that will hold all saved information from the database about an individual allergen. Use props to display information when the AllergenCard is deployed on the AllergenList component.
    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <h3>Allergen: {this.props.allergenProp.productName}</h3>
                    <p>Notes: {this.props.allergenProp.notes}</p>
                    <p>Date of Reaction: {this.props.allergenProp.date}</p>
                    <p>Symptoms: {this.props.allergenProp.symptoms}</p>
                    <p>Took Medicine? {this.props.allergenProp.tookMeds === true ? "Yes" : "No"} </p>
                    <p>Went to Doctor or ER? {this.props.allergenProp.medIntervention === true ? "Yes" : "No"} </p>
                    {/* Include a DELETE button that the user can click to delete the specific allergy displayed on the card. */}
                    <button type="button" onClick={() => this.props.deleteAllergen(this.props.allergenProp.id)}>Delete</button>
                </div>
            </div>
        );
    }
}

export default AllergensCard