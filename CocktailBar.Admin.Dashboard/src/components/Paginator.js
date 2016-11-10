import React, {Component} from 'react';
import Pager from 'react-pager';
const $ = require('jquery');
const Actions = require('./../actions/ingredientsActionsCreator');

export default class Paginator extends Component {
    constructor(props) {
        super(props);
        this.onPageChanged = this.onPageChanged.bind(this);
        this.state = {
            currentPage: 7,
            visiblePage: 3,
            total: 8
        }
    }

    onPageChanged(page) {
        this.setState({currentPage: page});
        Actions.changePage(page);
    }

    render() {
        return (
            <Pager total={this.state.total} current={this.state.currentPage} visiblePages={this.state.visiblePage} onPageChanged={this.onPageChanged} />
        )
    }
}