import React, {Component} from "react";
import AppHeader from "../todo-list/app-header";
import AppSearch from "../app-search";
import TodoList from "../todo-list";
import ItemAddForm from "../item-add-form";


export default class App extends Component {
    maxId = 1;
    state = {
        todoData: [
            this.createTodoItem('drink coffee'),
            this.createTodoItem('build awesome app'),
            this.createTodoItem('test app'),
        ],
        term: '',
        filter: 'all',
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

    search(items, term) {
        if (term.length === 0) {
            return items;
        }


        return items.filter((item) => {
            return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
        });
    }

    onSearchChange = (term) => {
        this.setState({term});
    };
    onFilterChange = (filter) => {
        this.setState({filter});
    };

    filter = (items, filter) => {
        switch (filter) {
            case 'all':
                return items;
            case 'active':
                return items.filter((item) => !item.done);
            case 'done':
                return items.filter((item) => item.done);
            default:
                return items;
        }
    }

    render() {
        const {todoData, term, filter} = this.state;
        const visibleItems = this.filter(this.search(todoData, term), filter);
        const doneCount = this.state.todoData.filter((el) => el.done).length;
        const todoCount = this.state.todoData.length - doneCount;

        return (

            <div className="container">
                <AppHeader toDo={todoCount} done={doneCount}/>
                <AppSearch onSearchChange={this.onSearchChange} filter={filter} onFilterChange={this.onFilterChange}/>
                <TodoList todos={visibleItems}
                          onDeleted={this.deleteItem}
                          onToggleImportant={this.onToggleImportant}
                          onToggleDone={this.onToggleDone}

                />
                <ItemAddForm onItemAdded={this.addItem}/>
            </div>
        )
    }
}






