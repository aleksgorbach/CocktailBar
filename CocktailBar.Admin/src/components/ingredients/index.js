import React from 'react';
import { Link } from "react-router";

import "bulma";
import "./Ingredients.module.scss";

const IngredientRow = props => {
    let { ingredient, onEdit } = props;
    return (
        <tr>
            <td>{ingredient.title}</td>
            <td>{ingredient.description}</td>
            <td>
                <Link className="action-link" to={`/ingredients/${ingredient.id}`} onClick={() => onEdit(ingredient)}>Edit</Link>
                <a className="action-link" onClick="">Delete</a>
            </td>
        </tr>
    );
};

const Ingredients = props => {
    let { ingredients, onEdit } = props;
    const ingredientsArr = ingredients.map(ing => 
        <IngredientRow ingredient={ing} key={ing.id} onEdit={ onEdit } />
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
                    {ingredientsArr}
                </tbody>
            </table>
            
        </div>
    );
};

export default Ingredients;
