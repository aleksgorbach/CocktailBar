import React, {Component} from 'react';
import Paginator from "./../Paginator";


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


class IngredientsPage extends Component {
    constructor() {
        super();
        this.state = {
            ingredients: []
        }
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
                <Paginator current={this.props.current} total={this.props.total} visiblePages={this.props.visiblePages} onPageChanged={this.props.onPageChanged}/>
            </div>
        </div>
        )
    }
}

export default IngredientsPage;