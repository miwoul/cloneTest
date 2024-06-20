import { useState } from 'react';
import { FiEdit2, FiTrash2 } from 'react-icons/fi';

function TodoItem({ id, title, completed, onDelete }) {
  const [isCompleted, setIsCompleted] = useState(completed);

  const handleToggleComplete = () => {
    setIsCompleted(!isCompleted);
  };

  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <li
      className={`flex justify-between items-center bg-gray-100 p-4 my-2 rounded-lg shadow-md ${
        isCompleted ? 'line-through' : ''
      }`}
    >
      <span className="flex-grow" onClick={handleToggleComplete}>
        {title}
      </span>
      <div className="flex space-x-2">
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
