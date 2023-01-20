import React, {Component} from "react";
import "./item-add-form.css";

export default class ItemAddForm extends Component {

    state = {
        label: ''
    };

    onLabelChange = (event) => {
        this.setState({
            label: event.target.value
        });
    };

    onSubmit = (event) =>{

        // preventDefault() метод для отмены перезагрузки страницы
        event.preventDefault()
        this.props.onItemAdded(this.state.label)
    }

    render() {
        return (
            <form className="item-add-form d-flex">
                <input type="text" className="form-control" onChange={this.onLableChange}
                       placeholder="What needs to be done"/>
                <button
                    onSubmit={() => this.onSubmit}
                    className="btn btn-primary">Write
                </button>
            </form>
        )
    }
}