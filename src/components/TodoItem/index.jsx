import axios from 'axios';
import React from 'react';

const TodoItem = ({ item, deleteTodo }) => {
	return (
		<div className='w-full border-2 flex items-center justify-between'>
			<p className=' flex-1 px-5'>{item.todo}</p>
			<div>
				<button className='bg-green-500 py-2 px-5'>Edit</button>
				<button
					onClick={() => deleteTodo(item.id)}
					className='bg-red-500 py-2 px-5'
				>
					Delete
				</button>
			</div>
		</div>
	);
};

export default TodoItem;
