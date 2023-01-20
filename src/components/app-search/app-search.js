import React from "react";
import "./app-search.css";
import ItemStatusFilter from "./item-status-filter";

const AppSearch = () => {
    return (
        <div className="row">
            <input className="col form-control" placeholder="search" type="search"/>
            <ItemStatusFilter/>
        </div>
    );
};

export default AppSearch;