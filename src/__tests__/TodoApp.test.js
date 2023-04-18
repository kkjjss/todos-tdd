import React from "react";
import TodoApp from "../Components/TodoApp";
import { TODO_FORM_PLACEHOLDER_TEXT, TODO_FORM_SUBMIT_BUTTON_TEXT } from "../Constants/todos";
import { fireEvent, render, screen } from "@testing-library/react";

describe("<TodoApp />", () => {
  it("renders TodoForm and TodoList", () => {
    render(<TodoApp />);
    screen.getByText("등록"); // TodoForm 존재유무 확인
    screen.getByTestId("TodoList"); // TodoList 존재유무 확인
  });

  it("renders two default todos", () => {
    render(<TodoApp />);
    screen.getByText("TDD 배우기");
    screen.getByText("react-testing-library 사용하기");
  });

  it("creates new todo", () => {
    render(<TodoApp />);
    const inputElement = screen.getByPlaceholderText(TODO_FORM_PLACEHOLDER_TEXT);
    const submitButtonElement = screen.getByText(TODO_FORM_SUBMIT_BUTTON_TEXT);
    fireEvent.change(inputElement, {
      target: {
        value: "새 항목 추가하기",
      },
    });
    fireEvent.click(submitButtonElement);

    screen.getByText("새 항목 추가하기");
  });

  it("toggle todo", () => {
    render(<TodoApp />);
    const firstTodo = screen.getByText("TDD 배우기");

    fireEvent.click(firstTodo);
    expect(firstTodo).toHaveStyle("text-decoration: line-through;");

    fireEvent.click(firstTodo);
    expect(firstTodo).not.toHaveStyle("text-decoration: line-through;");

    fireEvent.click(firstTodo);
    expect(firstTodo).toHaveStyle("text-decoration: line-through;");
  });

  it("remove todo", () => {
    render(<TodoApp />);
    const removeButtonsElement = screen.getAllByText("삭제");
    const firstTodo = screen.getByText("TDD 배우기");
    fireEvent.click(removeButtonsElement[0]);
    expect(firstTodo).not.toBeInTheDocument();
  });
});
