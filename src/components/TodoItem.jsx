import { useState } from 'react';
import { FiEdit2, FiTrash2 } from 'react-icons/fi';

function TodoItem({ id, title, completed, onDelete }) {
  const [isCompleted, setIsCompleted] = useState(completed);

  const toggleCompleted = () => {
    setIsCompleted(!isCompleted);
  };

  const handleDelete = () => {
    onDelete(id); // 상위 컴포넌트(App)에서 전달된 onDelete 함수를 호출하여 id를 전달
  };

  const handleEdit = () => {
    // TODO: Implement edit functionality
    console.log(`Editing todo with id ${id}`);
  };

  return (
    <li
      className={`flex justify-between items-center bg-gray-100 p-4 my-2 rounded-lg shadow-md ${
        isCompleted ? 'line-through' : ''
      }`}
      onClick={toggleCompleted}
    >
      <span className="flex-grow">{title}</span>
      <div className="flex space-x-2">
        <button
          className="p-2 rounded-full shadow-md transition duration-300 bg-gray-100 hover:bg-gray-200"
          onClick={handleEdit}
        >
          <FiEdit2 />
        </button>
        <button
          className="p-2 rounded-full shadow-md transition duration-300 bg-gray-100 hover:bg-gray-200"
          onClick={handleDelete}
        >
          <FiTrash2 />
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
