import React, { useCallback } from "react";

export const TodoItem = React.memo(({ todo, onToggle, onRemove }) => {
  const { id, text, done } = todo;

  const handleToggleTodo = useCallback(() => {
    onToggle(id);
  }, [id, onToggle]);

  const handleRemoveTodo = useCallback(() => {
    onRemove(id);
  }, [id, onRemove]);
  return (
    <li>
      <span
        style={{
          textDecoration: done ? "line-through" : "none",
        }}
        onClick={handleToggleTodo}
      >
        {text}
      </span>
      <button onClick={handleRemoveTodo}>삭제</button>
    </li>
  );
});
