import React, { Component } from 'react';
import allergenManager from '../../modules/allergenManager'
import userManager from '../../modules/userManager'
class DataList extends Component {
    // Define state for DataList component
    state = {
        allergens: [],
    }

    componentDidMount(){
        // get all the allergens from the database
        allergenManager.getAll()
        .then((allergensFromData) => {
            console.log(allergensFromData)
            // Put all the allergens from the DB into state
            this.setState({
                allergens: allergensFromData
            })
            // Call all the functions defined below in componentDidMount
            this.getNumberTrueTookMeds()
            console.log(allergensFromData.length)
            this.getUsersFormallyDiagnosed()
            this.getUsersBitByTick()
        })
    }
// Define a function that retrieves the number of allergic reactions that required the user to take medication.
getNumberTrueTookMeds(){
    // get all the allergens from the database
    allergenManager.getAll()
    .then((allergensFromData) => {
        console.log(allergensFromData)
        var result = 0;
        // Loop through all of the allergens in the database and count the ones where the user "checked" that they took medication for that specific reaction. Put the number into the variable named "result".
        for(let i = 0; allergensFromData.length > i; i++){
            if(allergensFromData[i].tookMeds === true){
                result++;
            }
        }
        // Get the percentage of reactions that required the user to take meds by dividing the "result" by the total # of reactions in the database, then multiplying by 100 to get a percentage number. Also, round the number to the nearest whole integer for better display.
        var percentTookMeds = Math.round((result/allergensFromData.length)*100)
        console.log(percentTookMeds);
        this.setState({
            tookMeds: percentTookMeds
        })
    })

}
// Define a function that will give the percentage of users who "checked" that they have been formally diagnosed by a medical professional.
getUsersFormallyDiagnosed(){
    // Get all the users from the database
    userManager.getAll()
    // filter through the users and put that # of users who "checked" the box as true into the variable named "formalDiagnoses"
    .then((usersFromData) => {
    const formalDiagnoses = usersFromData.filter(
        currentUser => currentUser.formalDiagnosis === true
    )
    // Get the percentage of users who have been formally diagnosed by taking "formalDiagnoses" and dividing it by total numbers of users, multiplying by 100 to get an integer and rounding to the nearest whole integer.
    var percentFormallyDiagnosed = Math.round((formalDiagnoses.length/usersFromData.length)*100)
        console.log(percentFormallyDiagnosed)
        // Put "percentFormallyDiagnosed" into state
        this.setState({
            formalDiagnosis: percentFormallyDiagnosed
        })
})
}
// Use the same method that you used to get "percentFormallyDiagnosed" to get "percentBitByTick" and put that into state
getUsersBitByTick(){
    userManager.getAll()
    .then((usersFromData) => {
        const bitByTick = usersFromData.filter(
            currentUser => currentUser.tickBite === true
        )
        var percentBitByTick = Math.round((bitByTick.length/usersFromData.length)*100)
        console.log(percentBitByTick)
        this.setState({
            tickBite: percentBitByTick
        })
    })
}
// Render all of the results into a card that displays the percentages found above by calling them out of state.
    render() {
        return <div className="card">
            <div className="card-content">
            <h3>Data Analysis</h3>
            <p>Users had to take medication for <h3>{this.state.tookMeds} %</h3> of reactions.</p>
            <br></br>
            <p> <h3>{this.state.formalDiagnosis} % </h3> of Users have been formally diagnosed by a doctor or medical professional.</p>
            <br></br>
            <p><h3>{this.state.tickBite} % </h3> of Users were bit by a tick around the time that they first developed Alpha-Gal allergy.</p>
            </div>
        </div>

    }
}

export default DataList
