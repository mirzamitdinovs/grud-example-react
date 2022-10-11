import logo from './logo.svg';
import './App.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

function App() {
	return (
		<div className='bg-gray-100 h-screen '>
			<div className='w-1/2 mx-auto py-20'>
				<TodoList />
			</div>
		</div>
	);
}

export default App;
