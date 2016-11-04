import React, {Component} from 'react';
var Store = require('./../stores/IngredientsStore');

export default class IngredientsPage extends Component {
    constructor() {
        super();
        this.state = {
            ingredients: []
        }
        Store.getData(data => {
            this.setState({
                ingredients: data
            })
        })
    }

    render() {
        var rows = [];
        this.state.ingredients.forEach(ingredient => {
            rows.push(<IngredientRow ingredient={ingredient} key={ingredient} />)
        })
        return (
            <table>
                <tbody>
                    {rows}
                </tbody>
            </table>
        )
    }
}

class IngredientRow extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.ingredient.title}</td>
                <td>{this.props.ingredient.description}</td>
            </tr>
        )
    }
}