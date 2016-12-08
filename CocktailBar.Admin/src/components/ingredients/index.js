import React from 'react';

import "bulma";
import "./Ingredients.module.scss";

const IngredientRow = props => {
    return (
        <tr>
            <td>{props.ingredient.title}</td>
            <td>{props.ingredient.description}</td>
            <td>
                <a className="action-link" onClick={props.onEdit}>Edit</a>
                <a className="action-link" onClick={props.onDelete}>Delete</a>
            </td>
        </tr>
    );
};
IngredientRow.propTypes = {
    ingredient: React.PropTypes.object.isRequired,
    onEdit: React.PropTypes.func,
    onDelete: React.PropTypes.func
};

const Ingredients = props => {
    const ingredients = props.ingredients.map(ing => 
        <IngredientRow ingredient={ing} key={ing.id} onEdit={() => props.onEdit(ing)} onDelete={() => props.onDelete(ing.id)} />
    )
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {ingredients}
                </tbody>
            </table>
            
        </div>
    );
};
Ingredients.propTypes = {
    ingredients: React.PropTypes.array.isRequired,
    onEdit: React.PropTypes.func,
    onDelete: React.PropTypes.func
};
export default Ingredients;
