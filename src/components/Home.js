import React, {Component} from 'react';
import Rainbow from '../higherOrderComponents/Rainbow';
import axios from 'axios';
import Todos from './todo/Todos';
import AddTodo from './todo/AddTodo';

class Home extends Component {
  state = {
    todos: [],
  };
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(res => {
      this.setState({
        todos: res.data.slice(0,10)
      });
    })
  };
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({todos});
  };
  addTodo = (todo) => {
    todo.id = new Date().getUTCMilliseconds();
    let todos = [...this.state.todos, todo];
    this.setState({todos})
  };
  render() {
    return (
        <div className="todo-app container">
          <h1 className="center blue-text">Todo's</h1>
          <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
          <AddTodo addTodo={this.addTodo}/>
        </div>
    );
  };
};

export default Rainbow(Home);