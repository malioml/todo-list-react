import React from 'react';
import {Link} from 'react-router-dom';
import todoImage from '../../todo.svg';

const Todos = ({todos, deleteTodo}) => {
  const todoList = todos.length ? (
      todos.map(todo => {
        return (<div className="collection-item" key={todo.id}>
          <img src={todoImage} alt="todo"/>
          <span>{todo.title}</span>
          &nbsp;
          <Link to={`/todo/${todo.id}`} className="waves-effect waves-light btn">
            <i className="material-icons left">pageview</i>View
          </Link>
          &nbsp;
          <button className="btn waves-effect waves-light red" onClick={() => deleteTodo(todo.id)}>
            <i className="material-icons left">delete_forever</i>
            Delete
          </button>
        </div>);
      })
  ) : (
      <p className="center">You have no todo's left</p>
  );

  return (
      <div className="todos collection">
        {todoList}
      </div>
  );
};

export default Todos;