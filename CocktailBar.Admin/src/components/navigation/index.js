import React, { Component } from 'react';
import { Link } from 'react-router';

import "bulma";
import "./navigation.module.scss";

const pages = [
    {
        title: "Home",
        path: "/"
    },
    {
        title: "Ingredients",
        path: "/ingredients"
    },
    {
        title: "Recipes",
        path: "/recipes"
    }
]

const NavLink = (props) => {
    const onClick = () => {
        if(!props.isActive){
            props.onClick(props.href);
        }
    }
    return (
        <Link
        className={"nav-item is-tab " + (props.isActive ? "active" : "inactive")}
        to={props.href}
        onClick={onClick}>
        {props.title}
    </Link>);
}

NavLink.propTypes = {
    isActive: React.PropTypes.bool,
    children: React.PropTypes.string,
    href: React.PropTypes.string,
    onClick: React.PropTypes.func
}

const Navigation = (props) => {
    let {activePage, onPageChanged} = props;
    const nav = pages.map(x => <NavLink isActive={activePage === x.path} href={x.path} onClick={onPageChanged} key={x.path} title={x.title} />);
    return (
        <nav className="nav">
            <div className="nav-left">
                {nav}
            </div>
        </nav>
    )
}

Navigation.propTypes = {
    activePage: React.PropTypes.string,
    onClick: React.PropTypes.func
}

export default Navigation;