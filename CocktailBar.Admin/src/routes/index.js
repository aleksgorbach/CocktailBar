import { Route, IndexRoute } from "react-router";
import React from "react";

import AppContainer from "./../containers/AppContainer";
import Ingredients from "./../containers/IngredientsContainer";
import Recipes from "./../containers/RecipesContainer";

const createRoutes = () => (
    <Route path="/" component={AppContainer}>
        <IndexRoute component={Ingredients}></IndexRoute>
        <Route path="ingredients" component={Ingredients}></Route>
        <Route path="recipes" component={Recipes}></Route>
    </Route>
);

export default createRoutes;