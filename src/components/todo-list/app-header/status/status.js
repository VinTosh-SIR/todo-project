import "./item-status-filter.css";
import React from "react";

const ItemStatusFilter =({toDo, done})=>{
    return(
        <div className="col block-right">
            <span> more to do,</span><span> done</span>
        </div>
    )
};

export default ItemStatusFilter;