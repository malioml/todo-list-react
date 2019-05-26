import React, {Component} from 'react';
import {connect} from 'react-redux';
import {deleteTodo} from '../../actions/postActions';

class Todo extends Component {
  handleClick = () => {
    this.props.deleteTodo(this.props.todo.id);
    this.props.history.push('/');
  };
  render() {
    const todo = this.props.todo ? (
        <div className="todo">
          <h4 className="center">
            {this.props.todo.id}
          </h4>
          <p>{this.props.todo.title}</p>
          <button className="btn grey" onClick={this.handleClick}>
            Delete Todo
          </button>
        </div>
        ) : (
        <div className="center">Loading todo...</div>
    );
    return (
        <div className="container">
          {todo}
        </div>
    );
  };
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.todo_id;
  const todo = state.todos.find(todo => todo.id === parseInt(id));
  return {todo}
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTodo: (id) => {dispatch(deleteTodo(id))}
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);