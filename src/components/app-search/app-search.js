import React, {Component} from "react";
import "./app-search.css";
import ItemStatusFilter from "./item-status-filter";

export default class AppSearch extends Component {
    state = {
        term: ''
    };

    onSearchChange = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onSearchChange(term);
    };

    render() {


        const {filter, onFilterChange} = this.props
        console.log(filter)
        return (
            <div className="row">
                <input
                    className="col form-control"
                    placeholder="search"
                    type="text"
                    value={this.state.term}
                    onChange={this.onSearchChange}
                />
                <ItemStatusFilter filter={filter} onFilterChange={onFilterChange}/>
            </div>
        );
    };
};

