import React, { Component } from 'react';

class EditItemForm extends Component {
    constructor(props) {
        super(props);
        var item = this.item ||
        {
            id: "",
            title: "",
            description: ""
        }
        this.state = {
            id: item.id,
            title: item.title,
            description: item.description
        }
    }

    onSubmit() {
        this.props.onSubmit(this.state);
    }

    render() {
        return (
            <form>
            <div>
                <input name="title" type="text" placeholder="Title" onChange={event => this.setState({title: event.target.value})}/>
            </div>
            <div>
                <input name="description" type="text" placeholder="Description" onChange={event => this.setState({description: event.target.value})}/>
            </div>
            <button onClick={this.onSubmit.bind(this) }>Click me</button>
        </form>
        );
    }
}

EditItemForm.propTypes = {
    onSubmit: React.PropTypes.func.isRequired
}

export default EditItemForm;