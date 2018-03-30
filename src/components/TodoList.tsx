import * as React from 'react';
import Todo from './Todo';
import { TodoType } from './TodoType';

type ToggleType = (id: number) => void;

interface Props {
  todos: Array<TodoType>;
  toggleTodo: ToggleType;
}

const TodoList: React.SFC<Props> = ({ todos, toggleTodo }) => (
  <ul>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => toggleTodo(todo.id)}
      />
    )}
  </ul>
);

// TodoList.propTypes = {
//   todos: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     completed: PropTypes.bool.isRequired,
//     text: PropTypes.string.isRequired
//   }).isRequired).isRequired,
//   toggleTodo: PropTypes.func.isRequired
// }

export default TodoList;
