import React from "react";
import Status from "./status";

const AppHeader = ({toDo, done}) => {
    return (
        <div className="row">
            <h1 className="col">Todo list</h1>
            <Status toDo={toDo} done={done}/>
        </div>
    );
};

export default AppHeader;