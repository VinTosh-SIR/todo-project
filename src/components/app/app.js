import React, {Component} from "react";
import AppHeader from "../todo-list/app-header";
import AppSearch from "../app-search";
import TodoList from "../todo-list";
import ItemAddForm from "../item-add-form";


export default class App extends Component {
    maxId = 4;
    state = {
        todoData: [
            this.createTodoItem('drink coffee'),
            this.createTodoItem('build awesome app'),
            this.createTodoItem('test app'),
        ],
    };

    createTodoItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++
        }
    }

    deleteItem = (id) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex((el) => el.id === id);
            const newArray = [
                ...todoData.slice(0, idx),
                ...todoData.slice(idx + 1)
            ];
            return {
                todoData: newArray
            }
        })
    }

    addItem = (text) => {

//generate id
        const newItem = this.createTodoItem(text);
//add element in arr
        this.setState(({todoData}) => {
            const newArr = [
                ...todoData,
                newItem
            ];
            return {
                todoData: newArr
            };
        })
    }

    toggleProperty(arr, id, propName) {
        const idx = arr.findIndex((el) => el.id === id)

        //update obj
        const oldItem = arr[idx];
        const newItem = {...oldItem, [propName]: !oldItem[propName]}

        //construct new arr
        return [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1)
        ];
    }

    onToggleImportant = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'important')
            }
        })
    }
    onToggleDone = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'done')
            }
        })
    }

    render() {
        const doneCount = this.state.todoData.filter((el) => el.done).length;

        const todoCount = this.state.todoData.length - doneCount;
        return (

            <div className="container">
                <AppHeader toDo={todoCount} done={doneCount}/>
                <AppSearch/>
                <TodoList todos={this.state.todoData}
                          onDeleted={this.deleteItem}
                          onToggleImportant={this.onToggleImportant}
                          onToggleDone={this.onToggleDone}

                />
                <ItemAddForm onItemAdded={this.addItem}/>
            </div>
        )
    }
}






