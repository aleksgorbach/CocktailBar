import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, hashHistory} from 'react-router';

import App from './layouts/main/App';

import Ingredients from './pages/Ingredients';
import Recipes from './pages/Recipes';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="ingredients" component={Ingredients}/>
      <Route path="recipes" component={Recipes}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
