import React from 'react';
// Components
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component {

  componentDidMount(){
    this.props.fetchTodos();
  }

  render() {
    const { todos, receiveTodo } = this.props;
    const todoItems = todos.map(todo => (
        <TodoListItem
          key={`todo-list-item${todo.id}`}
          todo={todo}
          receiveTodo={ receiveTodo } />
      )
    );
      // debugger
    return(
      <div>
        <ul className="todo-list">
          { todoItems }
        </ul>
        <TodoForm createTodo={ this.props.createTodo }/>
      </div>
    );
  }
}

export default TodoList;
