import React, { Component } from 'react';
import './Allergens.css'

class AllergensCard extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <h3>Allergen: {this.props.allergenProp.productName}</h3>
                    <p>Notes: {this.props.allergenProp.notes}</p>
                    <button type="button" onClick={() => this.props.deleteAllergen(this.props.allergenProp.id)}>Delete</button>
                </div>
            </div>
        );
    }
}

export default AllergensCard