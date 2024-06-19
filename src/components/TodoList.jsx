import TodoItem from './TodoItem';
function TodoList({ todos }) {
  return (
    <ul className="divide-y divide-gray-200">
      {todos.map((todo, index) => (
        <TodoItem key={index} {...todo} />
      ))}
    </ul>
  );
}

export default TodoList;
