import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import Ingredients from "./../../components/ingredients";
import Pager from "./../../components/pagination";

import * as PageActions from "./../../actions/pageActions";
import * as IngrActions from "./../../actions/ingredientActions";

class Container extends Component {
    componentDidMount(){
        let { pagination, changePage, ingredients } = this.props;
        if(ingredients.length == 0) {
            changePage(pagination.currentPage);
        }
    }

    render() {
        let { ingredients, pagination, changePage, onEdit} = this.props;
        return (
            <div>
                <Pager current={pagination.currentPage} total={pagination.totalPages} visiblePages={pagination.visiblePages} changePage={changePage}/>
                <Ingredients ingredients={ingredients} onEdit={onEdit}/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    ingredients: state.ingredients.data,
    pagination: state.ingredients.pagination
})

const mapDispatchToProps = dispatch => ({
    changePage: page => dispatch(PageActions.changePage("INGR", page)),
    onEdit: ingr => dispatch(IngrActions.editItemRequested(ingr))
})

export default connect(mapStateToProps, mapDispatchToProps)(Container);