import React from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = ({ toDoList, setNewToDo, setToDoItems, setIsEdit, setEditId }) => {
  return (
    <div className="todo-list">
      {toDoList.length > 0 ? (
        toDoList.map((toDo) => (
          <ToDoItem
            key={toDo.id}
            toDo={toDo}
            setNewToDo={setNewToDo}
            setToDoItems={setToDoItems}
            toDoList={toDoList}
            setIsEdit={setIsEdit}
            setEditId={setEditId}
          />
        ))
      ) : (
        <p className="empty-list">No tasks available. Add one!</p>
      )}
    </div>
  );
};

export default ToDoList;
