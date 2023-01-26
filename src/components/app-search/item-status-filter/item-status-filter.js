import "./item-status-filter.css";
import React from "react";

export default class ItemStatusFilter extends React.Component {

    buttons = [
        {name: "done", label: "Done"},
        {name: "active", label: "Active"},
        {name: "all", label: "All"},
    ];

    render() {
        const {filter, onFilterChange} = this.props;
        const isActive = filter === this.buttons.name;
        const clazz = isActive ? "btn-outline-secondary" : "btn-primary";
        const buttons = this.buttons.map(({name, label}) => {
            return (
                <button
                    type="button"
                    className={`btn ${clazz} btn-right`}
                    onClick={() => onFilterChange(name)}
                    key={name}>
                    {label}
                </button>);
        });

        return (
            <div className="col">
                {buttons}
            </div>
        )
    }
}
