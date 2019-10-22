import React, { Component } from 'react';
import './Allergens.css'

class AllergensCard extends Component {
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
                    <button type="button" onClick={() => this.props.deleteAllergen(this.props.allergenProp.id)}>Delete</button>
                </div>
            </div>
        );
    }
}

export default AllergensCard