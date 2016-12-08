import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import Ingredients from "./../../components/ingredients";
import Pager from "./../../components/pagination";

import * as PageActions from "./../../actions/pageActions";

class Container extends Component {
    componentDidMount(){
        this.props.changePage(0);
    }

    render() {
        let { ingredients, pagination, changePage } = this.props;
        return (
            <div>
                <Ingredients ingredients={ingredients} />
                <Pager current={pagination.currentPage} total={pagination.totalPages} visiblePages={pagination.visiblePages} changePage={changePage}/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    ingredients: state.ingredients.data,
    pagination: state.ingredients.pagination
})

const mapDispatchToProps = dispatch => ({
    changePage: page => dispatch(PageActions.changePage("INGR", page))
})

export default connect(mapStateToProps, mapDispatchToProps)(Container);