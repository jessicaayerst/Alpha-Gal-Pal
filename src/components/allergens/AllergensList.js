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

        deleteAllergen = id => {
            allergenManager.delete(id)
            .then(() =>
              allergenManager.getAll())
              .then((newAllergens) => {
                this.setState({
                    allergens: newAllergens
                })
              })

          }
    componentDidMount(){
        console.log("Allergen LIST: ComponentDidMount");
        //getAll from AllergenManager and hang on to that data; put it in state
        // AllergenManager.getAll()

        const id = sessionStorage.getItem("credentials")

        UserManager.getWithAllergens(id)
        .then((allergensFromData) => {
            console.log(allergensFromData.allergens)
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
            <section className="section-content">
                    <button type="button"
                        className="btn"
                        onClick={() => { this.props.history.push("/allergens/new") }}>
                        Input New Allergen
                    </button>
            </section>
            <div>
                {this.state.allergens.map(singleAllergen =>
                <AllergensCard key={singleAllergen.id} allergenProp={singleAllergen} deleteAllergen={this.deleteAllergen} {...this.props}/>
                )}
            </div>
            </>
        )
    }
}

export default AllergensList
