import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';

const ToDoItem = ({ toDo, setNewToDo, setToDoItems, toDoList, setIsEdit, setEditId }) => {
  const handleEditToDo = () => {
    setIsEdit(true);
    setEditId(toDo.id);
    setNewToDo(toDo.name);
  };

  const handleDeleteToDo = () => {
    const updatedList = toDoList.filter((item) => item.id !== toDo.id);
    setToDoItems(updatedList);
    localStorage.setItem('toDoList', JSON.stringify(updatedList));
  };

  const handleToDoCheck = () => {
    const updatedList = toDoList.map((item) => (item.id === toDo.id ? { ...item, checked: !item.checked } : item));
    setToDoItems(updatedList);
    localStorage.setItem('toDoList', JSON.stringify(updatedList));
  };

  return (
    <div className={`todo-item ${toDo.checked ? 'completed' : ''}`}>
      <input type="checkbox" checked={toDo.checked} onChange={handleToDoCheck} />
      <span>{toDo.name}</span>
      <div className="actions">
        <FontAwesomeIcon className="edit-icon" icon={faPenToSquare} onClick={handleEditToDo} />
        <FontAwesomeIcon className="delete-icon" icon={faTrashCan} onClick={handleDeleteToDo} />
      </div>
    </div>
  );
};

export default ToDoItem;
