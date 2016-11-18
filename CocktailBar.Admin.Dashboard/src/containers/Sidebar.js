import React from 'react';
import { connect } from 'react-redux';

import { navLinkClick } from "./../actions/NavigationActions";

import Navigation from "./../components/Navigation";

const mapStateToProps = (state) => {
    return {
        activePage: state.navigation.activePage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (href) => {
            dispatch(navLinkClick(href));
        }
    }
}

const Sidebar = connect(
    mapStateToProps,
    mapDispatchToProps
)(Navigation)

export default Sidebar;