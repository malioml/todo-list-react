import React, {Component} from 'react';
import Todos from './todo/Todos';
import AddTodo from './todo/AddTodo';
import {connect} from 'react-redux';

class Home extends Component {
  deleteTodo = (id) => {
    const todos = this.props.todos.filter(todo => todo.id !== id);
    this.setState({todos});
  };
  addTodo = (todo) => {
    todo.id = new Date().getUTCMilliseconds();
    let todos = [...this.props.todos, todo];
    this.setState({todos})
  };
  render() {
    return (
        <div className="todo-app container">
          <h1 className="center blue-text">Todo's</h1>
          <Todos todos={this.props.todos} deleteTodo={this.deleteTodo}/>
          <AddTodo addTodo={this.addTodo}/>
        </div>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
};

export default connect(mapStateToProps)(Home);