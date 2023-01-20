import React from "react";
import "./todo-list-item.css";
import trash from "./trash.svg";
import infoSquare from "./info-square.svg";

export default class TodoListItem extends React.Component {
    constructor() {
        super();
    };


    render() {
        const {label, onDeleted, onToggleDone, onToggleImportant, done, important} = this.props;

        let classNames = "todo-list-item";
        if (done) {
            classNames += ' done';
        }
        if (important) {
            classNames += ' important';
        }

        return (
            <span className={classNames}>
                <span onClick={onToggleDone}>{label}</span>
                <span className="right">
                    <button className="btn btn-trash" onClick={onDeleted}><img alt="trash" src={trash}/></button>
                    <button className="btn btn-important right" onClick={onToggleImportant}><img alt="info-square"
                                                                                                 className={trash}
                                                                                                 src={infoSquare}
                    /></button>
                </span>
            </span>
        );
    }
}
