import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import AddTodo from '../AddTodo';
import TodoItem from '../TodoItem';
const fetcher = (...args) => fetch(...args).then((res) => res.json());
const TodoList = () => {
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		getTodos();
	}, []);

	const getTodos = async () => {
		try {
			const res = await axios.get('https://dummyjson.com/todos/user/1');
			setTodos(res.data.todos);
		} catch (err) {
			console.log('err: ', err.message);
		}
	};

	const deleteTodo = async (id) => {
		try {
			const res = await axios.delete(`https://dummyjson.com/todos/${id}`);
			if (res.data.isDeleted) {
				setTodos(todos.filter((item) => item.id != id));
			}
		} catch (err) {
			console.log('err: ', err.message);
		}
	};

	const submit = (item) => {
		setTodos([...todos, item]);
	};
	return (
		<div className='bg-white p-5 rounded-lg'>
			<AddTodo submit={submit} />
			{todos.map((item, index) => (
				<TodoItem key={index} item={item} deleteTodo={deleteTodo} />
			))}
		</div>
	);
};

export default TodoList;
