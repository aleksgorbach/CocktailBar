import React, { Component } from "react";
import { connect } from "react-redux";

import * as IngrActions from "./../../../actions/ingredientActions";

import "bulma";

class Container extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: props.item.id,
            title: props.item.title,
            description: props.item.description
        }
    }

    onFormSubmit = event => {
        this.props.onSubmit({
            id: this.state.id,
            title: this.state.title,
            description: this.state.description
        });
        this.onBackClick(event);
    };

    onBackClick = event => {
        event.preventDefault();
        this.props.router.goBack();
    }

    render() {
        return (
            <div>
                <form>
                    <label className="label" htmlFor="title">Название</label>
                    <p className="control">
                        <input type="input" name="title" id="title" defaultValue={this.state.title} onChange={e => this.setState({title: e.target.value})} />
                    </p>
                    <label className="label" htmlFor="description">Описание</label>
                    <p className="control">
                        <input type="textarea" name="description" id="description" defaultValue={this.state.description} onChange={e => this.setState({description: e.target.value})}/>
                    </p>
                    <p className="control">
                        <button className="button is-primary" onClick={this.onFormSubmit.bind(this)}>Сохранить</button>
                        <button className="button is-link" onClick={this.onBackClick.bind(this)}>Отмена</button>
                    </p>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        item: state.ingredients.active
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSubmit: item => dispatch(IngrActions.onItemEdited(item))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);