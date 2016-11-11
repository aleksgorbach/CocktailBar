import React, {Component} from 'react';
import {Link} from 'react-router'

/*export default class Navigation extends Component {
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
}*/

class NavLink extends Component {
    render() {
        if(this.props.isActive){
            return (
                <span>
                    {this.props.content}
                </span>
            )
        } else {
            return (
                <a 
                    href={this.props.href} 
                    onClick = {e => {
                        e.preventDefault();
                        this.props.onClick(href);
                    }}>
                        {this.props.content}
                </a>)
        }
    }
} 

class Navigation extends Component {
    render() {
        return (
            <nav className="sidenav">
                <ul>
                    <li><NavLink isActive="true" href="#" content="Home" onClick={this.props.onClick}/></li>
                </ul>
            </nav>
        )
    }
}

export default Navigation;