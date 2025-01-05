import { useEffect, useState } from 'react';
import ToDoList from './components/ToDoList';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [toDoItems, setToDoItems] = useState([]);
  const [newToDo, setNewToDo] = useState('');
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(null);

  const addToDo = () => {
    if (newToDo.trim() === '') {
      alert('Please enter a task before adding/updating!');
      return;
    }

    const updatedItems = isEdit
      ? toDoItems.map((item) => (item.id === editId ? { ...item, name: newToDo } : item))
      : [...toDoItems, { id: uuidv4(), name: newToDo, checked: false }];

    setToDoItems(updatedItems);
    localStorage.setItem('toDoList', JSON.stringify(updatedItems));
    setNewToDo('');
    setIsEdit(false);
  };

  useEffect(() => {
    const storedItems = localStorage.getItem('toDoList');
    if (storedItems) setToDoItems(JSON.parse(storedItems));
  }, []);

  return (
    <div className="app-container">
      <h1>To-Do List</h1>
      <div className="input-container">
        <input
          type="text"
          value={newToDo}
          onChange={(e) => setNewToDo(e.target.value)}
          onKeyDown={(e) => (e.key === 'Enter' ? addToDo() : null)}
          placeholder="Enter your task..."
        />
        <button className="add-task-btn" onClick={addToDo}>
          {isEdit ? 'Update Task' : 'Add Task'}
        </button>
      </div>
      <ToDoList
        toDoList={toDoItems}
        setToDoItems={setToDoItems}
        setNewToDo={setNewToDo}
        setIsEdit={setIsEdit}
        setEditId={setEditId}
      />
    </div>
  );
}

export default App;
