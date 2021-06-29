import React from 'react';

const Filter = (props) => {
    return (
      <div className="ms-5">
        <div className="ui buttons">
          <button 
            className={`ui button ${props.filter === 'all' ? 'active' : ''}`} 
            onClick={() => props.onFilter('all')}>
              All
          </button>
          <button 
            className={`ui button ${props.filter === 'todo' ? 'active' : ''}`} 
            onClick={() => props.onFilter('todo')}>
              ToDo
          </button>
          <button 
            className={`ui button ${props.filter === 'completed' ? 'active' : ''}`} 
            onClick={() => props.onFilter('completed')}>
              Completed!
          </button>
        </div>
      </div>
    );
}

export default Filter;