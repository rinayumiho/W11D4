import * as APIUtil from '../util/todo_api_util';

export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TODO_ERROR = 'TODO_ERROR';


export const fetchTodos = () => {
  return (dispatch) => {
    return APIUtil.fetchTodos()
      .then((todos) => {
        dispatch(receiveTodos(todos))
  
    })
  }
}


export const createTodo = (todo) => {
  return (dispatch) => {
    return APIUtil.createTodo()
      .then((todo) => {
        dispatch(receiveTodo(todo))
      })
  }
}
export const receiveTodos = todos => ({
  type: RECEIVE_TODOS,
  todos,
});

export const receiveTodo = todo => ({
  type: RECEIVE_TODO,
  todo,
});

export const removeTodo = todo => ({
  type: REMOVE_TODO,
  todo,
});

export const todoError = error => ({
  type: TODO_ERROR,
  error,
});
