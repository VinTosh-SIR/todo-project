import "./status.css";
import React from "react";

const Status =({toDo, done})=>{
    return(
        <div className="col block-right">
            <span>{toDo} more to do,</span><span>{done} done</span>
        </div>
    )

};

export default Status;