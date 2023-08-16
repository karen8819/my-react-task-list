import React from 'react';

class TodoItem extends React.Component {
  render() {
    const { text, completed, onClick, onDelete } = this.props;
    const textDecoration = completed ? 'line-through' : 'none';

    return (
      <div style={{ textDecoration }}>
        <input type="checkbox" checked={completed} onChange={onClick} />
        {text}
        <button onClick={onDelete}>Eliminar</button>
      </div>
    );
  }
}

export default TodoItem;
