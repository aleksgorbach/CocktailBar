import React from 'react';
import { connect } from 'react-redux';

import { NavLinkClick } from "./../actions/NavigationActions";

import Navigation from "./../components/Navigation";

const mapStateToProps = (state) => {
    return {
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