import React, { Component } from 'react';
import TodoItem from '../components/TodoItem'

export default class TodoList extends Component {
  render() {
    const {items, onEdit, onDelete, onToggleDone, count} = this.props
    return (
      <div className="Todo-List">
        <ul className="list-group list-group-flush">
          {items.map((item, index) => {
            return (
              <TodoItem 
                item={item} 
                key={item.id} 
                onDone={onToggleDone}
                onClickDelete={onDelete}
                onClickEdit={onEdit}
              />
            ) 
          })}
        </ul> 
        <h2 className="todo-list-count">
          You have <span className="todo-list-number">{count}</span> things to do
        </h2>
      </div>
    );
  }
};  

