import React from 'react';
import TodoItem from './TodoItem';

class TodoApp extends React.Component {
  state = {
    todos: [],
    newTodoText: '',
  };

  handleInputChange = event => {
    this.setState({ newTodoText: event.target.value });
  };

  handleAddTodo = () => {
    const { todos, newTodoText } = this.state;
    if (newTodoText.trim() === '') return;

    const newTodo = { text: newTodoText, completed: false };
    this.setState({
      todos: [...todos, newTodo],
      newTodoText: '',
    });
  };

  handleToggleTodo = index => {
    const { todos } = this.state;
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    this.setState({ todos: updatedTodos });
  };

  handleDeleteTodo = index => {
    const { todos } = this.state;
    const updatedTodos = todos.filter((_, i) => i !== index);
    this.setState({ todos: updatedTodos });
  };

  render() {
    const { todos, newTodoText } = this.state;

    return (
        <div className='contenedorPrincipal'>
      <div >
        <h1>Lista de Tareas</h1>
        <div >
          <input
            type="text"
            value={newTodoText}
            onChange={this.handleInputChange}
          />
          <button className="btn" onClick={this.handleAddTodo}>Agregar</button>
        </div>
        <div>
          {todos.map((todo, index) => (
            <TodoItem
              key={index}
              text={todo.text}
              completed={todo.completed}
              onClick={() => this.handleToggleTodo(index)}
              onDelete={() => this.handleDeleteTodo(index)}
            />
          ))}
        </div>
      </div>
      </div>
    );
  }
}

export default TodoApp;
