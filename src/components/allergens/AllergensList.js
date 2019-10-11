import React, { Component } from 'react'
    //import the components we will need
    import AllergensCard from './AllergensCard'
    import AllergenManager from '../../modules/allergenManager'

    class AllergenList extends Component {
        //define what this component needs to render
        state = {
            allergens: [],
        }

        deleteAllergen = id => {
            AllergenManager.delete(id)
            .then(() => {
              AllergenManager.getAll()
              .then((newAllergens) => {
                this.setState({
                    news: newAllergens
                })
              })
            })
          }
    componentDidMount(){
        console.log("Allergen LIST: ComponentDidMount");
        //getAll from AllergenManager and hang on to that data; put it in state
        AllergenManager.getAll()
        .then((allergensFromData) => {
            this.setState({
                allergens: allergensFromData
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
            <div className="container-cards">
                {this.state.allergens.map(singleAllergen =>
                <AllergensCard key={singleAllergen.id} allergenProp={singleAllergen} deleteAllergen={this.deleteAllergen}{...this.props}/>)}
            </div>
            </>
        )
    }
}

export default AllergenList
