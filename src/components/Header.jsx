import React from 'react';

const Header = ({toDo, done, todos}) => {
  return (
    <div className="Header mb-3">
      <h1 className="title">To do List</h1>
      <div>
        <p className="m-0">{(new Date()).toDateString()}</p>
        {todos.length > 0 && (
          <h2 className="position">
            <span className="num-color">{toDo}</span> More to do, <span className="num-color">{done}</span> done
          </h2>
        )}
      </div>
    </div>
  );
};
  
export default Header;