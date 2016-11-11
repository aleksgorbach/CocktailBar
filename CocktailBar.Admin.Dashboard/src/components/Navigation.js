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

const NavLink = ({ isActive=false, href, content, onClick }) => {
    if(isActive){
        <span>
            {content}
        </span>
    } else {
        <a 
            href={href} 
            onClick = {e => {
                e.preventDefault();
                onClick(href);
            }}>
            {content}
        </a>
    }
} 

const Navigation = ({onClick}) => {
    <nav className="sidenav">
        <ul>
            <li><NavLink isActive="true" href="#" content="Home" onClick={onClick}/></li>
        </ul>
    </nav>
}

export default Navigation;