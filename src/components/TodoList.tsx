import React from 'react';
import { Todo } from '../model';
import SingleTodo from './SingleTodo';

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div className='todos'>
      {todos.map((todo, index) => (
        <SingleTodo key={index} todo={todo} todos={todos} setTodos={setTodos} />
      ))}
    </div>
  );
};

export default TodoList;
