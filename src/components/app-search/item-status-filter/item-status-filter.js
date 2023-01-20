import "./item-status-filter.css";
import React from "react";

export default class ItemStatusFilter extends React.Component{

    render() {
        return(
            <div className="col block-right">
                <button className="btn left-btn btn-primary">All</button>
                <button className="btn central-btn btn-light">Active</button>
                <button className="btn right-btn btn-light">Done</button>
            </div>
        )
    }
}
