import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  // 전체 할 일 목록을 가져오는 함수
  const fetchTodos = () => {
    axios
      .get('http://localhost:3001/todos')
      .then((res) => {
        console.log(res);
        setTodos(res.data);
      })
      .catch((err) => {
        console.error('Error occured on fetching', err);
      });
  };

  // 새로운 할 일을 추가하는 함수
  const addTodo = (todoTitle) => {
    axios
      .post('http://localhost:3001/todos', {
        title: todoTitle,
        completed: false,
      })
      .then((res) => {
        console.log(res);
        fetchTodos(); // 추가 후 목록 다시 불러오기
      })
      .catch((err) => {
        console.error('Error occured on adding todo', err);
      });
  };

  // 할 일을 삭제하는 함수
  const deleteTodo = (id) => {
    axios
      .delete(`http://localhost:3001/todos/${id}`)
      .then((res) => {
        console.log(res);
        fetchTodos(); // 삭제 후 목록 다시 불러오기
      })
      .catch((err) => {
        console.error('Error occured on deleting todo', err);
      });
  };

  // 할 일을 수정하는 함수
  const updateTodo = (id, updatedTodo) => {
    axios
      .put(`http://localhost:3001/todos/${id}`, updatedTodo)
      .then((res) => {
        console.log(res);
        fetchTodos(); // 수정 후 목록 다시 불러오기
      })
      .catch((err) => {
        console.error('Error occured on updating todo', err);
      });
  };

  return (
    <div className="bg-violet-200 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex items-center justify-center mb-6">
          <h1 className="text-4xl font-bold text-black-600 ml-2">할 일 목록</h1>
        </div>
        <TodoInput addTodo={addTodo} />
        <TodoList todos={todos} onDelete={deleteTodo} onUpdate={updateTodo} />
      </div>
    </div>
  );
}

export default App;
