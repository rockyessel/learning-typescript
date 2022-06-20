import React from 'react';
import { Todo } from '../model';
import '../App.css';
import { FaEdit } from 'react-icons/fa';
import { MdDelete, MdOutlineDone } from 'react-icons/md';

interface Props {
  todos: Todo[];
  todo: Todo;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo: React.FC<Props> = ({
  todo: { id, todo, isDone },
  todos,
  setTodos,
}) => {
  return (
    <form className='todos__single'>
      <span className='todos__single--text'>{todo}</span>

      <div>
        <span className='icon'>
          <FaEdit />
        </span>
        <span className='icon'>
          <MdDelete />
        </span>
        <span className='icon'>
          <MdOutlineDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
