import { useEffect,  useState} from 'react';
import TodoItem from './TodoItem';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState('');

  useEffect(()=>{
    const storedTodos=JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(storedTodos);
  }, []);

useEffect(()=>{
    localStorage.setItem('todos', JSON.stringify(todos));
}, [todos]);
  
  useEffect(() => {
  }, []);

  const addTodo = () => {
    if (inputText.trim() !== '') {
      setTodos([...todos, { text: inputText, completed: false }]);
      setInputText('');
    }
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const toggleTodo = (index) => {
    const newTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
  };

  return (
    <div className='contenedor'>
      <div className='contenedorTareas'>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button onClick={addTodo}>Agregar</button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            index={index}
            todo={todo}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
