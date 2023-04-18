import React from "react";
import { TodoForm } from "../Components/TodoForm";
import { fireEvent, render, screen } from "@testing-library/react";
import { TODO_FORM_PLACEHOLDER_TEXT, TODO_FORM_SUBMIT_BUTTON_TEXT } from "../Constants/todos";

describe("<TodoForm />", () => {
  const setupTest = (props = {}) => {
    render(<TodoForm {...props} />);

    const inputElement = screen.getByPlaceholderText(TODO_FORM_PLACEHOLDER_TEXT);
    const submitButtonElement = screen.getByText(TODO_FORM_SUBMIT_BUTTON_TEXT);

    return {
      inputElement,
      submitButtonElement,
    };
  };

  it("has input and a button", () => {
    const { inputElement, submitButtonElement } = setupTest();
    expect(inputElement).toBeTruthy();
    expect(submitButtonElement).toBeTruthy();
  });

  it("change input", () => {
    const { inputElement } = setupTest();

    fireEvent.change(inputElement, {
      target: {
        value: "TDD 스터디",
      },
    });
    expect(inputElement).toHaveAttribute("value", "TDD 스터디");
  });

  it("calls onInsert and clears input", () => {
    const onInsert = jest.fn();

    const { inputElement, submitButtonElement } = setupTest({ onInsert });

    fireEvent.change(inputElement, {
      target: {
        value: "TDD 스터디",
      },
    });

    fireEvent.click(submitButtonElement);
    expect(onInsert).toBeCalledWith("TDD 스터디");
    expect(inputElement).toHaveAttribute("value", "");
  });
});
