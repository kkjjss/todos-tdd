import React from "react";
import { TodoItem } from "../Components/TodoItem";
import { fireEvent, render, screen } from "@testing-library/react";

describe("<TodoItem />", () => {
  const sampleTodo = {
    id: 1,
    text: "TDD 스터디",
    done: false,
  };

  const setupTest = (props = {}) => {
    const initialProps = { todo: sampleTodo };
    render(<TodoItem {...initialProps} {...props} />);
    const todo = props.todo || initialProps.todo;
    const nameSpanElement = screen.getByText(todo.text);
    const removeButtonElement = screen.getByText("삭제");
    return {
      nameSpanElement,
      removeButtonElement,
    };
  };

  it("has span and button", () => {
    const { nameSpanElement, removeButtonElement } = setupTest();
    expect(nameSpanElement).toBeTruthy();
    expect(removeButtonElement).toBeTruthy();
  });

  it("shows line-through on span when done is true", () => {
    const { nameSpanElement } = setupTest({ todo: { ...sampleTodo, done: true } });

    expect(nameSpanElement).toHaveStyle("text-decoration: line-through;");
  });

  it("doesn't shows line-through on span when done is false", () => {
    const { nameSpanElement } = setupTest({ todo: { ...sampleTodo, done: false } });

    expect(nameSpanElement).not.toHaveStyle("text-decoration: line-through;");
  });

  it("calls onToggle", () => {
    const onToggle = jest.fn();
    const { nameSpanElement } = setupTest({ onToggle });

    fireEvent.click(nameSpanElement);
    expect(onToggle).toBeCalledWith(sampleTodo.id);
  });

  it("calls onRemove", () => {
    const onRemove = jest.fn();
    const { removeButtonElement } = setupTest({ onRemove });
    fireEvent.click(removeButtonElement);
    expect(onRemove).toBeCalledWith(sampleTodo.id);
  });
});
