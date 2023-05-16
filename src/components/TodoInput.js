import React, {useState} from 'react'
import {addTodo} from '../redux/actions'
import {v1 as uuid} from 'uuid';
import {useDispatch} from 'react-redux';
import './TodoInput.css'

function TodoInput() {
	let [name, setName] = useState();
	let dispatch = useDispatch();

	return (
		<div>
			<h3>TodoInput</h3>
			<div className="input-group m-2">
				<label htmlFor="todo-input" className="visually-hidden">Todo name</label>
				<input
					id="todo-input"
					value={name}
					onChange={(e)=> setName(e.target.value)}
					type="text"
					className="form-control"
					placeholder="Enter todo name"
				/>
				<button
					onClick={()=> {
						dispatch(addTodo({
							id: uuid(),
							name: name,
						}));
						setName("");
					}}
					className="btn btn-primary btn-lg">Add</button>
			</div>
		</div>
	)
}

export default TodoInput
