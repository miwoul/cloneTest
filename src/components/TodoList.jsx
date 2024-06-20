import TodoItem from './TodoItem';

function TodoList({ todos, onDelete }) {
  return (
    <ul className="divide-y divide-gray-200">
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} onDelete={onDelete} />
      ))}
    </ul>
  );
}

export default TodoList;
