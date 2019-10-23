import React, { Component } from 'react';
import allergenManager from '../../modules/allergenManager'
import userManager from '../../modules/userManager'
class DataList extends Component {
    state = {
        allergens: [],
    }

    componentDidMount(){
        allergenManager.getAll()
        .then((allergensFromData) => {
            console.log(allergensFromData)
            this.setState({
                allergens: allergensFromData
            })
            this.getNumberTrueTookMeds()
            console.log(allergensFromData.length)
            this.getUsersFormallyDiagnosed()
            this.getUsersBitByTick()
        })
    }

getNumberTrueTookMeds(){
    allergenManager.getAll()
    .then((allergensFromData) => {
        console.log(allergensFromData)
        var result = 0;
        for(let i = 0; allergensFromData.length > i; i++){
            if(allergensFromData[i].tookMeds === true){
                result++;
            }
        }
        var percentTookMeds = Math.round((result/allergensFromData.length)*100)
        console.log(percentTookMeds);
        this.setState({
            tookMeds: percentTookMeds
        })
    })

}

getUsersFormallyDiagnosed(){
    userManager.getAll()
    .then((usersFromData) => {
    const formalDiagnoses = usersFromData.filter(
        currentUser => currentUser.formalDiagnosis === true
    )
    var percentFormallyDiagnosed = Math.round((formalDiagnoses.length/usersFromData.length)*100)
        console.log(percentFormallyDiagnosed)
        this.setState({
            formalDiagnosis: percentFormallyDiagnosed
        })
})
}

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
