import React, { Component } from 'react'
import userManager from '../../modules/userManager'
import AllergenCard from '../animal/AllergenCard'
import { arrayExpression } from '@babel/types'

class UserWithAllergens extends Component {
    state = {
        user: {},
        allergens: []
    }

    componentDidMount(){
        //got here now make call to get employee with allergen
        userManager.getWithAllergens(this.props.match.params.userId)
            .then((userObject) => {
                console.log(userObject)
               
            this.setState({
              user: userObject,
              allergens: userObject.allergens,
            })
        })
    }

    render(){
        return (
          <div className="card">
            <p>User: {this.state.user.name}</p>
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