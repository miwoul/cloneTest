import TodoItem from './TodoItem';

function TodoList({ todos, onDelete }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} onDelete={onDelete} />
      ))}
    </ul>
  );
}

export default TodoList;
