import React, { Component } from 'react';
import allergenManager from '../../modules/allergenManager'

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
        var percentTookMeds = (result/allergensFromData.length)*100
        console.log(percentTookMeds);
        this.setState({
            tookMeds: percentTookMeds
        })
    })

}

    render() {
        return <div className="card">
            <div className="card-content">
            <h3>Data Analysis</h3>
            <p>Users had to take medication for <h3>{this.state.tookMeds} %</h3> of reactions.</p>
            </div>
        </div>

    }
}

export default DataList
