import React, {Component} from 'react';
import Paginator from "./../components/Paginator";
const Store = require('./../stores/IngredientsStore');

export default class IngredientsPage extends Component {
    constructor() {
        super();
        this.updateState = this.updateState.bind(this);
        this.state = {
            ingredients: []
        }
    }

    componentWillMount() {
        Store.addChangeListener(this.updateState);
        this.updateState();
    }
 
    componentWillUnmount() {
        Store.removeChangeListener(this.updateState);
    }

    updateState(){
        this.setState({
            ingredients: Store.getIngredients()
        })
    }

    render() {
        var rows = [];
        this.state.ingredients.forEach(ingredient => {
            rows.push(<IngredientRow ingredient={ingredient} key={ingredient} />)
        })
        return (
        <div>
            <fieldset>
                <AddItemForm />
            </fieldset>
            <div className="items-list">
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
                <Paginator />
            </div>
        </div>
        )
    }
}

class IngredientRow extends Component {
    editClicked() {
        console.log("edit clicked: " + this.props.ingredient.id);
    }

    deleteClicked() {
        console.log("delete clicked: " + this.props.ingredient.id);
    }

    render() {
        return (
            <tr>
                <td>{this.props.ingredient.id}</td>
                <td>{this.props.ingredient.title}</td>
                <td>{this.props.ingredient.description}</td>
                <td>
                    <a onClick={this.editClicked.bind(this)}>Edit</a>
                    <a onClick={this.deleteClicked.bind(this)}>Delete</a>
                </td>
            </tr>
        )
    }
}

class AddItemForm extends Component {
    render() {
        return (
            <div className="add-item-form">
                <div>
                    <input type="text" name="ingredient_title" placeholder="Title" />
                </div>
                <div>
                    <textarea name="ingredient_desc" rows="3" placeholder="Description" />
                </div>
                <div>
                    <button id="add_ingredient">Add</button>
                </div>
            </div>
        )
    }
}