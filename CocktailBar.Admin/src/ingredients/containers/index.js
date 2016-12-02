import React, { Component } from 'react';

import IngredientsList from "./../components/IngredientsList";
import EditForm from "./../components/EditItemForm";
import Pager from "react-pager";

import { getList } from "./../api";

const pageSize = 3;

function status(response) {  
  if (response.status === 200) {  
    return Promise.resolve(response);
  } else {  
    return Promise.reject(new Error(response.statusText));
  }  
}

function json(response) {  
  return response.json();
}

class IngredientsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ingredients: [],
            pagination: {
                current: 0,
                total: 12,
                visiblePages: 3
            }
        };
    }

    onPageChanged = page => {
        console.log(`page changed: ${page}`);

        this.setState({
            pagination: {
                ... this.state.pagination,
                current: page
            }
        });
        getList(page, pageSize).then(res => console.info(res));
    }

    

    /*var url = new URL("api/ingredients"),
        params = { page: page, pageSize: pageSize};
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
    fetch(url)
        .then(status)
        .then(json)
        .then(data => {
            this.setState({
                ingredients: data
            });
        })
        .catch(error => {
            console.log(error);
            this.setState({
                ingredients: []
            });
        });
}*/

    render () {
        return (
            <div>
	        <fieldset>
	            <EditForm 
                    onSubmit={
                        item => console.log(item)
                    }
                />
	        </fieldset>
	        <IngredientsList ingredients={this.state.ingredients} onEdit={this.onEdit} onDelete={this.onDelete}/>
	        <Pager 
                total={this.state.pagination.total} 
                current={this.state.pagination.current} 
                visiblePages={this.state.pagination.visiblePages} 
                onPageChanged={this.onPageChanged}/>
	    </div>
        );
    }
}

export default IngredientsContainer;