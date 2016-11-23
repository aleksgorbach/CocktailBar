import React, {Component} from 'react';
import {Link} from 'react-router'

const NavLink = (props) => {
    if(props.isActive){
        return (
            <span className="nav-item-active">
                {props.children}
            </span>
        )
    } else {
        return (
            <Link 
                className="nav-item-inactive"
                to={props.href} 
                onClick = {() => {
                    props.onClick(props.href);
                }}>
                    {props.children}
            </Link>)
    }
}

NavLink.propTypes = {
    isActive: React.PropTypes.bool,
    children: React.PropTypes.string,
    href: React.PropTypes.string,
    onClick: React.PropTypes.func
}

const Navigation = (props) => {
    return (
        <nav className="sidenav">
            <ul>
                <li>
                    <NavLink isActive={props.activePage === "#"} href="#" onClick={props.onClick}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink isActive={props.activePage === "Ingredients"} href="Ingredients" onClick={props.onClick}>
                        Ingredients
                    </NavLink>
                </li>
                <li>
                    <NavLink isActive={props.activePage === "Recipes"} href="Recipes" onClick={props.onClick}>
                        Recipes
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

Navigation.propTypes = {
    activePage: React.PropTypes.string,
    onClick: React.PropTypes.func
}

export default Navigation;