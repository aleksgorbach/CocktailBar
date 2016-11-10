import React, {Component} from 'react';
import {Link} from 'react-router'

export default class Navigation extends Component {
    render() {
        return (
            <nav className="sidenav">
                <ul>
                    <li><Link to="#">Home</Link></li>
                    <li><Link to="ingredients">Ingredients</Link></li>
                    <li><Link to="#">Recipes</Link></li>
                </ul>
            </nav>
        )
    }
}