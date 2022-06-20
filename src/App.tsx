import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import TodoList from './components/TodoList';
import { Todo } from './model';

// let name: String;
// let age: number | string;
// let isStudent: boolean;
// let hobbies: string[];
// let role: [number, string];

// role = [3, 's'];

// type Person = {
//   name: string;
//   age?: number;
// };

// let lostOfPeople: Person = {
//   name: 'lost',
// };

// let person: Person = {
//   name: 'Eoin',
//   age: 23,
// };

// let personName: (age: number) => unknown; //:never" doesn't return any undefine.

// //Functions in typescript
// function printName(name: string) {
//   console.log(name);
// }
// printName('Eoin');

// //@desc Declaring a Function type.
// let printNames: Function;

// let functionIn: (name: string) => void;

// //Interface
//  interface ArrayOfCats  {
//    name: string,
//  }

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (event: React.FormEvent) => {
    event.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo('');
    }
    console.table(todos);
  };

  return (
    <div className='App'>
      <span className='heading'>TASKIFY</span>
      <InputField handleAdd={handleAdd} todo={todo} setTodo={setTodo} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
