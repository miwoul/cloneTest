import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([
    {
      completed: true,
      title: '리액트 공부하기',
    },
    {
      completed: false,
      title: '축구 연습하기',
    },
  ]);

  return (
    <div className="bg-violet-200 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex items-center justify-center mb-6">
          <h1 className="text-4xl font-bold text-black-600 ml-2">Todo list</h1>
        </div>
        <TodoInput />
        <TodoList todos={todos} />
      </div>
    </div>
  );
}

export default App;
