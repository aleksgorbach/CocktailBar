import React, { Component } from 'react';
import { Field, reduxForm, filterProps, initialize } from 'redux-form';

const renderField = (field) => (
    <div className="input-row">
      <input {...field.input} type="text"/>
    </div>
)

class AddItemForm extends Component {
    constructor(props) {
        super(props);
        this.props.dispatch(initialize("ingredientForm", this.props.item));
    }

    render() {
        const { handleSubmit, onSubmit } = this.props;
        return (
            <form>
                <div>
                    <Field name="title" component={renderField} type="text" placeholder="Title"/>
                </div>
                <div>
                    <Field name="description" type="text" component={renderField} placeholder="Description"/>
                </div>
                <button onClick={ handleSubmit(onSubmit) }>Click me</button>
            </form>
        )
    }
}

AddItemForm.propTypes = {
    item: React.PropTypes.object,
    onSubmit: React.PropTypes.func.isRequired,
    handleSubmit: React.PropTypes.func,
    initializeForm: React.PropTypes.func,
    fields: React.PropTypes.object
}

export default reduxForm ({
    form: "ingredientForm"
})(AddItemForm);