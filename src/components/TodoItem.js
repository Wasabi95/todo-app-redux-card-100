import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../redux/actions';
import './TodoItem.css';

function TodoItem({ todo }) {
  const [editable, setEditable] = useState(false);
  const [name, setName] = useState(todo.name);
  const dispatch = useDispatch();

  const handleUpdateClick = () => {
    dispatch(
      updateTodo({
        ...todo,
        name,
      })
    );
    if (editable) {
      setName(todo.name);
    }
    setEditable(!editable);
  };

  const handleDeleteClick = () => {
    dispatch(deleteTodo(todo.id));
  };

  return (
    <div className="row mx-2 align-items-center">
      <div className="col-1">
        <span className="badge bg-secondary">{todo.id.length > 1 ? todo.id[2] : todo.id}</span>
      </div>
      <div className="col">
        {editable ? (
          <input
            type="text"
            className="form-control"
            placeholder="Write text..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        ) : (
          <h4>{todo.name}</h4>
        )}
      </div>
      <div className="col">
        <button
          className="btn btn-primary m-2"
          onClick={handleUpdateClick}
        >
          {editable ? 'Update' : 'Edit'}
        </button>
        <button
          className="btn btn-danger m-2"
          onClick={handleDeleteClick}
        >
          Borrando
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
