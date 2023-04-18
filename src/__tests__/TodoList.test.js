import React from "react";
import { TodoList } from "../Components/TodoList";
import { render, screen, fireEvent } from "@testing-library/react";

describe("<TodoList />", () => {
  const sampleTodos = [
    {
      id: 1,
      text: "TDD 배우기",
      done: true,
    },
    {
      id: 2,
      text: "react-testing-library 사용하기",
      done: true,
    },
  ];

  it("renders todos properly", () => {
    render(<TodoList todos={sampleTodos} />);
    const firstTodo = screen.getByText(sampleTodos[0].text);
    const secondTodo = screen.getByText(sampleTodos[1].text);

    expect(firstTodo).toBeTruthy();
    expect(secondTodo).toBeTruthy();
  });

  it("calls onToggle and onRemove", () => {
    const onToggle = jest.fn();
    const onRemove = jest.fn();

    render(<TodoList todos={sampleTodos} onToggle={onToggle} onRemove={onRemove} />);

    const firstTodo = screen.getByText(sampleTodos[0].text);
    fireEvent.click(firstTodo);
    expect(onToggle).toBeCalledWith(sampleTodos[0].id);

    const secondTodo = screen.getAllByText("삭제");
    fireEvent.click(secondTodo[1]);
    expect(onRemove).toBeCalledWith(sampleTodos[1].id);
  });
});
