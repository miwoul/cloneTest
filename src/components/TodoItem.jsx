import { useState } from 'react';
import { FiEdit2, FiTrash2, FiCheck, FiX } from 'react-icons/fi';

function TodoItem({ id, title, completed, onDelete, onUpdate }) {
  const [isCompleted, setIsCompleted] = useState(completed);
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(title);

  const handleToggleComplete = () => {
    setIsCompleted(!isCompleted);
  };

  const handleDelete = () => {
    onDelete(id);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setUpdatedTitle(title); // 이전 제목으로 되돌리기
  };

  const handleUpdate = () => {
    onUpdate(id, { title: updatedTitle, completed: isCompleted });
    setIsEditing(false);
  };

  const handleChange = (e) => {
    setUpdatedTitle(e.target.value);
  };

  return (
    <li
      className={`flex justify-between items-center bg-gray-100 p-4 my-2 rounded-lg shadow-md ${
        isCompleted ? 'line-through' : ''
      }`}
    >
      {isEditing ? (
        <input
          type="text"
          value={updatedTitle}
          onChange={handleChange}
          className="flex-grow bg-transparent border-b-2 border-gray-300 outline-none px-2"
        />
      ) : (
        <span className="flex-grow" onClick={handleToggleComplete}>
          {title}
        </span>
      )}
      <div className="flex space-x-2">
        {isEditing ? (
          <>
            <button
              className="p-2 rounded-full shadow-md transition duration-300 bg-gray-100 hover:bg-gray-200"
              onClick={handleUpdate}
            >
              <FiCheck />
            </button>
            <button
              className="p-2 rounded-full shadow-md transition duration-300 bg-gray-100 hover:bg-gray-200"
              onClick={handleCancelEdit}
            >
              <FiX />
            </button>
          </>
        ) : (
          <>
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
          </>
        )}
      </div>
    </li>
  );
}

export default TodoItem;
