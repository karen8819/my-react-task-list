import React from 'react';

function TodoItem({ index, todo, deleteTodo, toggleTodo }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(index)}
      />
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.text}
      </span>
      <button onClick={() => deleteTodo(index)}>Eliminar</button>
    </li>
  );
}

export default TodoItem;
