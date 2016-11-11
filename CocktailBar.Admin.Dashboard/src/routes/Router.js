import React, {Component} from 'react';
import {Route, Router, hashHistory} from 'react-router';

import App from './../layouts/main/App';

import Ingredients from './../containers/Ingredients';
import Recipes from './../containers/Recipes';

import {connect} from 'react-redux';

class AppRouter extends Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={App}>
                <Route path="ingredients" component={Ingredients}/>
                <Route path="recipes" component={Recipes}/>
                </Route>
            </Router>
        )
    }
}

function mapStateToProps(state){
    return {
        page: state.page,
        data: state.data
    }
}

export default connect(mapStateToProps)(AppRouter);