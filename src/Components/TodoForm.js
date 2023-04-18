import React, { useCallback, useState } from "react";
import { TODO_FORM_PLACEHOLDER_TEXT, TODO_FORM_SUBMIT_BUTTON_TEXT } from "../Constants/todos";

export const TodoForm = ({ onInsert }) => {
  const [todo, setTodo] = useState("");

  const handleChangeInput = useCallback((event) => setTodo(event.target.value), []);

  const handleSubmit = useCallback(
    (event) => {
      onInsert(todo);
      setTodo("");
      event.preventDefault();
    },
    [onInsert, todo]
  );

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={todo} placeholder={TODO_FORM_PLACEHOLDER_TEXT} onChange={handleChangeInput} />
        <button type="submit">{TODO_FORM_SUBMIT_BUTTON_TEXT}</button>
      </form>
    </div>
  );
};
