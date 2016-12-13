import { Route, IndexRoute } from "react-router";
import React from "react";

import AppContainer from "./../containers/AppContainer";
import Ingredients from "./../containers/IngredientsContainer";
import IngredientsEdit from "./../containers/IngredientsContainer/edit";
import Recipes from "./../containers/RecipesContainer";

const createRoutes = (store) => (
    <Route path="/" component={AppContainer}>
        <IndexRoute component={Ingredients}></IndexRoute>
        <Route path="ingredients" component={Ingredients}></Route>
        <Route path="ingredients/:id" component={IngredientsEdit}></Route>
        <Route path="recipes" component={Recipes}></Route>
    </Route>
);

export default createRoutes;