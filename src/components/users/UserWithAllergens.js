import React, { Component } from 'react'
import userManager from '../../modules/userManager'
import AllergenCard from '../animal/AllergenCard'
import { arrayExpression } from '@babel/types'

class UserWithAllergens extends Component {
  // Define what is in state
    state = {
        user: {},
        allergens: []
    }

    componentDidMount(){
        //Get the allergens that this specific user has saved by using the userId as the parameter for the function below.
        userManager.getWithAllergens(this.props.match.params.userId)
            .then((userObject) => {
                console.log(userObject)
// Put the user's allergens into state
            this.setState({
              user: userObject,
              allergens: userObject.allergens,
            })
        })
    }
// Render an AllergenCard for each of the user's allergens. This will only render allergens that are linked to the specific user that is currently logged in.
    render(){
        return (
          <div className="card">
            <p>User: {this.state.user.name}</p>
            {/* Map through each of the user's allergens and make a card for each one. Each card will have an id of the allergenId from the database. */}
                {this.state.allergens.map(allergen =>
                  <AllergenCard
                    key={allergen.id}
                    allergenProp={allergen}
                    {...this.props}
                  />
                )}
          </div>
        )
      }
    }

    export default UserWithAllergens;