import React, {Component} from 'react';

import Header from '../components/Header';
import SearchPanel from '../components/SearchPanel';
import TodoList from '../components/ToDoList';
import AddTodo from '../components/AddTodo';
import Filter from './Filter';

export default class App extends Component {

  state = {
    todos: [
      { id: 1, title: 'Drink Coffee', done: false },
      { id: 2, title: 'Drink Tea', done: false },
      { id: 3, title: 'Drink Milk', done: false },
      { id: 4, title: 'Drink Pepsi', done: false }
    ],
      search: '',
      filter: 'all',
  }

  handleFilter = (param) => {
    this.setState({filter: param})
  }

  onSearch = (value) => {
    this.setState({search: value})
  };
  
  addItem = (title) => {
    this.setState(({ todos }) => 
      ({todos: [...todos, {id: Date.now(), title, done: false}]})
    )
      console.log(title)
  };

  onDeleted = (id) => {
    this.setState(({ todos }) => ({todos: todos.filter(todo => id !== todo.id)}))
    console.log(id, 'delete')
  };

  onToggleDone = (id) => {
    this.setState(({ todos }) => ({todos: todos.map(todo => id === todo.id 
      ? {...todo, done: !todo.done} 
      : todo) 
    }))
    console.log(id, 'done')
  };

  onEditChange = (id, title) => {
    this.setState(({ todos }) => ({ todos: todos.map(todo => id === todo.id ? {
      ...todo,
      title,
    } : todo) }))
    console.log(id, 'edit')
  };

  render() {
    const {todos} = this.state;

    let filtredTodos;
    if (this.state.filter === 'all') {
      filtredTodos = this.state.todos;
    }

    if (this.state.filter === 'todo') {
      filtredTodos = this.state.todos.filter(item => !item.done)
    }

    if (this.state.filter === 'completed') {
      filtredTodos = this.state.todos.filter(item => item.done)
    }

    filtredTodos = filtredTodos.filter(todo => todo.title.toLowerCase().includes(this.state.search.toLowerCase()));

    const doneCount = todos.filter((el) => el.done).length;
    const todoCount = todos.length - doneCount;
  
    return (
      <div className="App">
        <Header toDo={todoCount} done={doneCount} todos={todos}/>
        {todos.length > 0 &&
          <div className="d-flex justify-content-start">
            <SearchPanel onSearch={this.onSearch} searchValue={this.state.search}/>  
            <Filter onFilter={this.handleFilter} filter={this.state.filter}/>
          </div>
        }
        {todos.length   
          ? <TodoList  
              items={filtredTodos} 
              onToggleDone={this.onToggleDone} 
              onDelete={this.onDeleted}
              onEdit={this.onEditChange}
              count={todos.length}
            />
          : <p className="count-todos">You don't have todos!</p>  
        }
        <AddTodo onAddItem={this.addItem}/>
      </div>
    );
  };
};

