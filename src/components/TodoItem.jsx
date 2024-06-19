import { FiEdit2, FiTrash2 } from 'react-icons/fi';
function TodoItem() {
  return (
    <li className="flex justify-between items-center bg-gray-50 p-4 my-2 rounded-lg shadow-md">
      <span className="flex-grow">리액트공부</span>
      <div className="flex space-x-2">
        <button className="p-2 rounded-full shadow-md transition duration-300 bg-gray-100 hover:bg-gray-200">
          <FiEdit2 />
        </button>
        <button className="p-2 rounded-full shadow-md transition duration-300 bg-gray-100 hover:bg-gray-200">
          <FiTrash2 />
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
