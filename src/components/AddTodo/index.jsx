import axios from 'axios';
import React, { useState } from 'react';

const AddTodo = ({ submit }) => {
	const [value, setValue] = useState('test');

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const res = await axios.post('https://dummyjson.com/todos/add', {
				todo: value,
				completed: false,
				userId: 1,
			});
			submit(res.data);
			setValue('');
		} catch (err) {
			console.log('err: ', err.message);
		}
	};
	return (
		<form onSubmit={handleSubmit} className='bg-white flex mb-5'>
			<input
				required
				type='text'
				value={value}
				onChange={(e) => setValue(e.target.value)}
				className='bg-gray-200 w-full px-5'
			/>
			<input className='bg-green-500 w-20 py-2' type='submit' value={'Add'} />
		</form>
	);
};

export default AddTodo;
