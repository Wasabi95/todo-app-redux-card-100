import React from 'react'
import TodoItem from './TodoItem'
import { useSelector } from 'react-redux';

function TodoList() {
  let todos = useSelector(state => state);

  return (
    <div className="my-4">
      {todos.map(todo => {
        return <TodoItem todo={todo} key={todo.id} />
      })}
    </div>
  )
}

export default TodoList
