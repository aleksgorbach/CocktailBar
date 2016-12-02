import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { initialize } from 'redux-form';

import * as Actions from "./../actions/IngredientsActions";
import IngredientsList from "./../components/ingredients/Ingredients";
import EditForm from "./../components/ingredients/EditItemForm";
import Paginator from "./../components/Paginator";

class Ingredients extends Component {
	constructor(props){
		super(props);
		this.props.getList();
	}

	render() {
		return (
			<div>
				<fieldset>
					<EditForm item={this.props.activeItem} onSubmit={item => console.log(item)} initializeForm={this.props.initializeForm} />
				</fieldset>
				<IngredientsList ingredients={this.props.ingredients} onEdit={this.props.onEdit} onDelete={this.props.onDelete}/>
				<Paginator 
					current={this.props.pagination.current} 
					total={this.props.pagination.total} 
					visiblePages={this.props.pagination.visiblePages} 
					onPageChanged={this.props.onPageChanged}/>
			</div>
		)
	}
}

Ingredients.propTypes = {
	pagination: React.PropTypes.object.isRequired,
	ingredients: React.PropTypes.array.isRequired,
	activeItem: React.PropTypes.object,
	onPageChanged: React.PropTypes.func,
	onAddItem: React.PropTypes.func,
	getList: React.PropTypes.func,
	onEdit: React.PropTypes.func,
	onDelete: React.PropTypes.func,
	initializeForm: React.PropTypes.func
}

const mapStateToProps = (state) => {
	return {
		ingredients: state.ingredients.items,
		activeItem: state.ingredients.active,
		pagination: state.pagination
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(Actions, dispatch);
}

const IngredientsPage = connect(
	mapStateToProps,
	mapDispatchToProps
)(Ingredients)

export default IngredientsPage;