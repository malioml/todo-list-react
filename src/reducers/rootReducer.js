const initState = {
  todos: [
    {
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    },
    {
      "userId": 1,
      "id": 2,
      "title": "quis ut nam facilis et officia qui",
      "completed": false
    },
    {
      "userId": 1,
      "id": 3,
      "title": "fugiat veniam minus",
      "completed": false
    }
  ]
};

const rootReducer = (state = initState, action) => {
  if (action.type === 'DELETE_TODO') {
    let newTodos = state.todos.filter(todo => action.id !== todo.id);
    return {
      ...state,
      todos: newTodos
    }
  }
  return state;
};

export default rootReducer;

