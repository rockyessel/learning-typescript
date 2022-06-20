import React, { useRef } from 'react';
import '../App.css';

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (event: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(event) => {
        handleAdd(event);
        inputRef.current?.blur();
      }}
      className='input'
    >
      <input
        ref={inputRef}
        value={todo}
        onChange={(event) => setTodo(event.target.value)}
        type='input'
        placeholder='Enter a task'
        className='input__box'
      />

      <button onClick={handleAdd} className='input_submit'>
        Go
      </button>
    </form>
  );
};

export default InputField;
