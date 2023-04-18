import React, { useState, useRef, useCallback } from "react";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";

const TodoApp = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "TDD 배우기",
      done: false,
    },
    {
      id: 2,
      text: "react-testing-library 사용하기",
      done: false,
    },
  ]);
  const nextId = useRef(3);

  const handleInsertTodo = useCallback((todoText) => {
    setTodos((todos) =>
      todos.concat({
        id: nextId.current,
        text: todoText,
        done: false,
      })
    );
    nextId.current++;
  }, []);

  const handleToggleTodo = useCallback((todoId) => {
    setTodos((todos) => todos.map((todo) => (todo.id !== todoId ? todo : { ...todo, done: !todo.done })));
  }, []);

  const handleRemoveTodo = useCallback((todoId) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== todoId));
  }, []);

  return (
    <div>
      <TodoForm data-testid="helloworld" onInsert={handleInsertTodo} />
      <TodoList todos={todos} onToggle={handleToggleTodo} onRemove={handleRemoveTodo} />
    </div>
  );
};

export default TodoApp;
