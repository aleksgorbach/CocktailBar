import React from "react";
import { connect } from "react-redux";

import Navigation from "./../../components/navigation";
import { pageChanged } from "./../../actions/navActions";

import 'bulma';
import "./AppContainer.module.scss";

const app = (props) => {
    let {activePage, onPageChanged} = props;
    return (
        <div className="container">
            <Navigation activePage={activePage} onPageChanged={onPageChanged}/>
            <main>{props.children}</main>
        </div>
    )
}

const mapStateToProps = state => ({
    activePage: state.navigation.activePage
})

const mapDispatchToProps = dispatch => ({
    onPageChanged: page => dispatch(pageChanged(page))
})

export default connect(mapStateToProps, mapDispatchToProps)(app);