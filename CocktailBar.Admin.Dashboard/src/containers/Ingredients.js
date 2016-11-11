import React from 'react';
import { connect } from 'react-redux';

import { changePage } from "./../actions/IngredientsActions";

import IngredientsList from "./../components/lists/IngredientsList";

const mapStateToProps = (state) => {
    return {
        ingredients: state.ingredients,
        total: 19,
        current: 0,
        visiblePages: 3
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onPageChanged: (page) => {
            console.log("page changed to: " + page);
            dispatch(changePage(page));
        }
    }
}

const IngredientsPage = connect(
    mapStateToProps,
    mapDispatchToProps
)(IngredientsList)

export default IngredientsPage;