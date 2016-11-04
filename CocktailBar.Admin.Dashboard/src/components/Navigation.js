import React, {Component} from 'react';
import {Link} from 'react-router'

export default class Navigation extends Component {
    render() {
        return (
            <ul className='navigation'>
                <li><Link to='/' activeClassName='activePageLink'>Home</Link></li>
                <li><Link to='/ingredients' activeClassName='activePageLink'>Ingredients</Link></li>
                <li><Link to='/recipes' activeClassName='activePageLink'>Recipes</Link></li>
            </ul>
        )
    }
}