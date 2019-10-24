import React, { Component } from 'react'
    //import the components we will need
    import AllergensCard from './AllergensCard'
    import allergenManager from '../../modules/allergenManager'
    import UserManager from '../../modules/userManager'

    class AllergensList extends Component {
        //define what this component needs to render
        state = {
            allergens: [],
        }
        // Define deleteAllergen function here:
        deleteAllergen = id => {
            // Use allergenManager.delete to delete the allergen with the specified id.
            allergenManager.delete(id)
            .then(() =>
            // Use allergenManager.getAll to get the remaining allergens and put them into state
              allergenManager.getAll())
              .then((newAllergens) => {
                this.setState({
                    allergens: newAllergens
                })
              })

          }
    componentDidMount(){
        console.log("Allergen LIST: ComponentDidMount");
        // Use UserManager.getWithAllergens, with the user's ID as the parameter, to get the user's allergens from the database.

        const id = sessionStorage.getItem("credentials")

        UserManager.getWithAllergens(id)
        .then((allergensFromData) => {
            console.log(allergensFromData.allergens)
            // Sort the allergens by most recent date and then put it into state
            allergensFromData.allergens.sort(function(a, b){
                return new Date(b.date) - new Date(a.date);
              });
            this.setState({
                allergens: allergensFromData.allergens
            })
        })
    }

    render(){
        console.log("Allergen LIST: Render");

        return(
            <>
            {/* Create a button using this.props.history.push that takes User to the "Input New Allergen" form */}
            <section className="section-content">
                    <button type="button"
                        className="btn"
                        onClick={() => { this.props.history.push("/allergens/new") }}>
                        Input New Allergen
                    </button>
            </section>
            <div>
                {/* Loop through allergens in state and place each one into an AllergensCard that will display on the page. Make a prop called allergenProp and also include the delete function */}
                {this.state.allergens.map(singleAllergen =>
                <AllergensCard key={singleAllergen.id} allergenProp={singleAllergen} deleteAllergen={this.deleteAllergen} {...this.props}/>
                )}
            </div>
            </>
        )
    }
}

export default AllergensList
