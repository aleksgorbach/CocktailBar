import React from 'react';

const IngredientRow = props => {
    return (
        <tr>
            <td>{props.ingredient.id}</td>
            <td>{props.ingredient.title}</td>
            <td>{props.ingredient.description}</td>
            <td>
                <a onClick={props.onEdit}>Edit</a>
                <a onClick={props.onDelete}>Delete</a>
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
    return (
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
                    {props.ingredients.map(ing => <IngredientRow ingredient={ing} key={ing.id} onEdit={() => props.onEdit(ing)} onDelete={() => props.onDelete(ing.id)} />)}
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
